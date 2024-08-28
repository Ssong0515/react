package bitc.fullstack405.boardplayground.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "board_test")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;

}
