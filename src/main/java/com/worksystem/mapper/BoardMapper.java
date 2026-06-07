package com.worksystem.mapper;

import com.worksystem.dto.BoardDTO;
import com.worksystem.dto.BoardPostDTO;
import com.worksystem.entity.Board;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * 게시판 매퍼 — 게시판 정의 + 게시글
 */
@Mapper
public interface BoardMapper {

    // ===== 게시판 정의 =====
    List<Board> findBoards();

    Board findBoardById(@Param("id") Long id);

    Board findBoardByCode(@Param("boardCode") String boardCode);

    void insertBoard(BoardDTO board);

    void updateBoard(BoardDTO board);

    void deleteBoard(@Param("id") Long id);

    // ===== 게시글 =====
    List<BoardPostDTO> findPosts(Map<String, Object> params);

    BoardPostDTO findPostBySeq(@Param("postSeq") Long postSeq);

    void insertPost(BoardPostDTO post);

    void updatePost(BoardPostDTO post);

    void deletePost(@Param("postSeq") Long postSeq);

    void increaseViewCount(@Param("postSeq") Long postSeq);
}
