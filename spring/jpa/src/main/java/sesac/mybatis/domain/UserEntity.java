package sesac.mybatis.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity // 해당 클래스가 Entity 클래스라는 것을 알려줌
@Table(name="user") // 테이블 이름 명시
@Getter
@Setter
public class UserEntity {
    @Id // primary key
    @GeneratedValue // auto_increment
    private int id; // id

    @Column(length=20, nullable=false)
    // name varchar(20) not null
    private String name;

    @Column(length=20, nullable = false)
    private String nickname;
}
