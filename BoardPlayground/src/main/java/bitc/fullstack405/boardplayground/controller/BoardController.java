package bitc.fullstack405.boardplayground.controller;

import bitc.fullstack405.boardplayground.entity.Board;
import bitc.fullstack405.boardplayground.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @GetMapping("/getBoardList")
    public List<Board> getBoardList(){
        return boardRepository.findAll();
    }
}
