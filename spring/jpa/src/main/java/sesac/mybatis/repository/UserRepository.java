package sesac.mybatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.mybatis.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    // Optional: null의 여부를 체크, null일 수도 있는 객체를 다루기 위해 사용하는 클래스
    // null exception 오류를 방지하기 위해 사용
    Optional<UserEntity> findByName(String name);

//    Optional<UserEntity> findById(int id);
//    Optional<UserEntity> findByIdName(int id, String name);
    // select ~~ where name = #{name}

    // 찾는 name이 있으면 true, 없으면 false
//    boolean existsByName(String name);

}
