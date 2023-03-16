package sesac.mybatis.mapper;

import org.apache.ibatis.annotations.*;
import sesac.mybatis.domain.Person;

@Mapper
public interface PersonMapper {
    @Insert("insert into person(id,pw,name) values(#{id},#{pw},#{name})")
    void insertPerson(Person person);

    // 조회값이 여러 개 일 경우, list로 담겨옴
    // 조회값이 하나일 경우, Person 클래스로 값 담김
    @Select("select * from person where id=#{id} and pw=#{pw} limit 1")
    Person getPerson(String id, String pw);

    @Update("update person set pw=#{pw}, name=#{name} where id=#{id}")
    void updatePerson(Person person);

    @Delete("delete from person where id=#{id}")
    void deletePerson(String id);
}
