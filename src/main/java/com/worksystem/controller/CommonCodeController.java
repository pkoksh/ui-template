package com.worksystem.controller;

import com.worksystem.common.ApiResponse;
import com.worksystem.dto.CommonCodeDTO;
import com.worksystem.dto.CommonCodeGroupDTO;
import com.worksystem.entity.CommonCode;
import com.worksystem.entity.CommonCodeGroup;
import com.worksystem.service.CommonCodeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * 공통코드 관리 REST 컨트롤러
 *
 * 응답은 공통 ApiResponse {success, message, data} 표준을 따른다.
 * 예외는 GlobalExceptionHandler가 표준 실패 응답으로 변환한다.
 * 인가: 관리 API는 ADMIN, 소비(enum) API는 인증 사용자 전체 — SecurityConfig 참조.
 */
@Slf4j
@RestController
@RequestMapping("/api/common-codes")
@RequiredArgsConstructor
@Validated
public class CommonCodeController {

    private final CommonCodeService commonCodeService;

    /**
     * 코드 그룹 목록 조회 (마스터 그리드)
     */
    @GetMapping("/groups")
    public ApiResponse<List<CommonCodeGroup>> getGroups(
            @RequestParam(required = false) String groupName,
            @RequestParam(required = false) Boolean isActive) {
        return ApiResponse.ok(commonCodeService.getGroups(groupName, isActive));
    }

    /**
     * 코드 그룹 일괄 저장 (IBSheet status 'I'/'U'/'D')
     */
    @PostMapping("/groups")
    public ApiResponse<Void> saveGroups(@Valid @RequestBody List<CommonCodeGroupDTO> groups) {
        log.info("공통코드 그룹 저장 API 호출 - {}건", groups.size());
        commonCodeService.saveGroups(groups);
        return ApiResponse.okMessage("코드 그룹이 성공적으로 저장되었습니다.");
    }

    /**
     * 그룹의 상세 코드 목록 조회 (디테일 그리드)
     */
    @GetMapping("/groups/{groupCode}/codes")
    public ApiResponse<List<CommonCode>> getCodes(@PathVariable String groupCode) {
        return ApiResponse.ok(commonCodeService.getCodes(groupCode));
    }

    /**
     * 상세 코드 일괄 저장 (IBSheet status 'I'/'U'/'D')
     */
    @PostMapping("/codes")
    public ApiResponse<Void> saveCodes(@Valid @RequestBody List<CommonCodeDTO> codes) {
        log.info("공통코드 저장 API 호출 - {}건", codes.size());
        commonCodeService.saveCodes(codes);
        return ApiResponse.okMessage("코드가 성공적으로 저장되었습니다.");
    }

    /**
     * 소비용 — 활성 코드를 {code:[], text:[]}로 반환 (getEnumInfo가 그대로 변환)
     */
    @GetMapping("/enum/{groupCode}")
    public ApiResponse<Map<String, Object>> getEnum(@PathVariable String groupCode) {
        return ApiResponse.ok(commonCodeService.getEnum(groupCode));
    }
}
