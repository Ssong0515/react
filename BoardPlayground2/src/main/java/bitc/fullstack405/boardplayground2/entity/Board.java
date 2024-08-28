package bitc.fullstack405.boardplayground2.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "board_test2")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;

}
