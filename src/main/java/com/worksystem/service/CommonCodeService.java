package com.worksystem.service;

import com.worksystem.dto.CommonCodeDTO;
import com.worksystem.dto.CommonCodeGroupDTO;
import com.worksystem.entity.CommonCode;
import com.worksystem.entity.CommonCodeGroup;
import com.worksystem.mapper.CommonCodeMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

/**
 * 공통코드 서비스
 *
 * 예외는 삼키지 않고 전파한다 → GlobalExceptionHandler가 표준 실패 응답으로 변환하고
 * @Transactional이 롤백 처리 (UserService.saveUsers 본보기).
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class CommonCodeService {

    private final CommonCodeMapper commonCodeMapper;

    // ===== 코드 그룹 =====

    public List<CommonCodeGroup> getGroups(String groupName, Boolean isActive) {
        Map<String, Object> params = new HashMap<>();
        if (groupName != null && !groupName.trim().isEmpty()) {
            params.put("groupName", groupName.trim());
        }
        if (isActive != null) {
            params.put("isActive", isActive);
        }
        return commonCodeMapper.findGroups(params);
    }

    /**
     * 코드 그룹 일괄 저장 (IBSheet status 'I'/'U'/'D' 분기)
     */
    @Transactional
    public boolean saveGroups(List<CommonCodeGroupDTO> groups) {
        log.info("공통코드 그룹 저장 요청 - {}건", groups.size());

        for (CommonCodeGroupDTO dto : groups) {
            switch (dto.getStatus()) {
                case "I" -> createGroup(dto);
                case "U" -> updateGroup(dto);
                case "D" -> deleteGroup(dto);
                default -> log.warn("알 수 없는 상태: {}", dto.getStatus());
            }
        }
        return true;
    }

    private void createGroup(CommonCodeGroupDTO dto) {
        if (commonCodeMapper.findGroupByCode(dto.getGroupCode()) != null) {
            throw new IllegalArgumentException("이미 존재하는 그룹 코드입니다: " + dto.getGroupCode());
        }
        commonCodeMapper.insertGroup(dto);
    }

    private void updateGroup(CommonCodeGroupDTO dto) {
        CommonCodeGroup existing = findExistingGroup(dto.getId(), dto.getGroupCode());
        // 비즈니스 키 변경 금지 — FK(ON UPDATE 없음)와 업무 테이블의 값 참조 보호
        if (!existing.getGroupCode().equals(dto.getGroupCode())) {
            throw new IllegalArgumentException("그룹 코드는 변경할 수 없습니다: " + existing.getGroupCode());
        }
        dto.setId(existing.getId());
        commonCodeMapper.updateGroup(dto);
    }

    private void deleteGroup(CommonCodeGroupDTO dto) {
        CommonCodeGroup existing = findExistingGroup(dto.getId(), dto.getGroupCode());
        if (Boolean.TRUE.equals(existing.getIsSystem())) {
            throw new IllegalArgumentException("시스템 필수 그룹은 삭제할 수 없습니다: " + existing.getGroupCode());
        }
        // 하위 코드는 FK ON DELETE CASCADE로 함께 삭제 (관리 화면에서 확인창 안내)
        commonCodeMapper.deleteGroup(existing.getId());
    }

    /** U/D 대상 기존 그룹 조회 — id(대리키) 우선, 없으면 groupCode로 보조 식별 */
    private CommonCodeGroup findExistingGroup(Long id, String groupCode) {
        CommonCodeGroup existing = (id != null)
                ? commonCodeMapper.findGroupById(id)
                : commonCodeMapper.findGroupByCode(groupCode);
        if (existing == null) {
            throw new NoSuchElementException("그룹을 찾을 수 없습니다: " + (id != null ? "seq=" + id : groupCode));
        }
        return existing;
    }

    // ===== 상세 코드 =====

    public List<CommonCode> getCodes(String groupCode) {
        requireGroup(groupCode);
        return commonCodeMapper.findCodesByGroup(groupCode);
    }

    /**
     * 상세 코드 일괄 저장 (IBSheet status 'I'/'U'/'D' 분기)
     */
    @Transactional
    public boolean saveCodes(List<CommonCodeDTO> codes) {
        log.info("공통코드 저장 요청 - {}건", codes.size());

        for (CommonCodeDTO dto : codes) {
            switch (dto.getStatus()) {
                case "I" -> createCode(dto);
                case "U" -> updateCode(dto);
                case "D" -> deleteCode(dto);
                default -> log.warn("알 수 없는 상태: {}", dto.getStatus());
            }
        }
        return true;
    }

    private void createCode(CommonCodeDTO dto) {
        requireGroup(dto.getGroupCode());
        if (commonCodeMapper.existsCode(dto.getGroupCode(), dto.getCode())) {
            throw new IllegalArgumentException(
                    "이미 존재하는 코드입니다: " + dto.getGroupCode() + "." + dto.getCode());
        }
        commonCodeMapper.insertCode(dto);
    }

    private void updateCode(CommonCodeDTO dto) {
        CommonCode existing = findExistingCode(dto.getId());
        // 비즈니스 키 변경 금지
        if (!existing.getCode().equals(dto.getCode())
                || !existing.getGroupCode().equals(dto.getGroupCode())) {
            throw new IllegalArgumentException("코드값은 변경할 수 없습니다: " + existing.getCode());
        }
        commonCodeMapper.updateCode(dto);
    }

    private void deleteCode(CommonCodeDTO dto) {
        CommonCode existing = findExistingCode(dto.getId());
        CommonCodeGroup group = commonCodeMapper.findGroupByCode(existing.getGroupCode());
        if (group != null && Boolean.TRUE.equals(group.getIsSystem())) {
            throw new IllegalArgumentException(
                    "시스템 필수 그룹의 코드는 삭제할 수 없습니다: " + existing.getCode()
                    + " (비활성화를 사용하세요)");
        }
        commonCodeMapper.deleteCode(existing.getId());
    }

    private CommonCode findExistingCode(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("코드 식별자(id)가 없습니다.");
        }
        CommonCode existing = commonCodeMapper.findCodeById(id);
        if (existing == null) {
            throw new NoSuchElementException("코드를 찾을 수 없습니다: seq=" + id);
        }
        return existing;
    }

    // ===== 소비(enum) =====

    /**
     * 활성 코드를 {code:[], text:[]} 형태로 반환 — EnumMaker.getGroupEnum()과 동일 계약.
     * 프론트의 getEnumInfo()가 그대로 IBSheet Enum/EnumKeys로 변환한다.
     * 미존재 그룹은 404 (오타 조기 발견), 활성 코드 0건은 빈 배열 (정상).
     */
    public Map<String, Object> getEnum(String groupCode) {
        requireGroup(groupCode);
        List<CommonCode> codes = commonCodeMapper.findActiveCodesByGroup(groupCode);
        return Map.of(
                "code", codes.stream().map(CommonCode::getCode).toList(),
                "text", codes.stream().map(CommonCode::getCodeName).toList()
        );
    }

    private void requireGroup(String groupCode) {
        if (commonCodeMapper.findGroupByCode(groupCode) == null) {
            throw new NoSuchElementException("코드 그룹을 찾을 수 없습니다: " + groupCode);
        }
    }
}
