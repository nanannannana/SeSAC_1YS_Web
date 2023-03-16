package sesac.jpaPractice.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="user")
@Getter
@Setter
public class UserEntity {

    @Id
    @GeneratedValue
    private int id;

    @Column(length=5, nullable = false)
    private String name;

    @Column(length=10, nullable = false)
    private String nickname;
}
