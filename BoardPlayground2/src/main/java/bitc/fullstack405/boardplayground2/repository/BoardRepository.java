package bitc.fullstack405.boardplayground2.repository;

import
        bitc.fullstack405.boardplayground2.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
