package bitc.fullstack405.boardplayground.repository;

import bitc.fullstack405.boardplayground.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
