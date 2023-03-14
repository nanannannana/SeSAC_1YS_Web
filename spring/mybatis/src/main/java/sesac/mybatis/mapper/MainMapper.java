package sesac.mybatis.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesac.mybatis.domain.User;
import java.util.List;

@Mapper
public interface MainMapper {
    // mapper를 참고한 경우,
    List<User> retrieveAll();
    // Mainmapper와 연결된 xml안에 sql문을 실행시킴
    // 참고) 실행시킬 sql문 id와 함수명을 동일해야 함!

    //mapper를 참고하지 않은 경우,
    // user 클래스에 있는 값 매핑하여 insert문 실행
    @Insert("insert into user(name, nickname) values(#{name}, #{nickname})")
    void insertUser(User user);
}
