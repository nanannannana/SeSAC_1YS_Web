package sesac.mybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.mybatis.domain.Person;
import sesac.mybatis.dto.PersonDTO;
import sesac.mybatis.mapper.PersonMapper;

@Service
public class PersonService {

    @Autowired
    PersonMapper personMapper;
    // 회원가입
    public void insertPerson(PersonDTO personDTO) {
        // DTO에 있는 정보를 domain에 넣기
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        // DB에 사용자 정보 insert
        personMapper.insertPerson(person);
    }

    public PersonDTO getPerson(PersonDTO personDTO) {
        Person person = personMapper.getPerson(personDTO.getId(), personDTO.getPw());
        // 조회값이 없을 경우(아이디, 비번이 일치하지 않는 경우)
        if (person == null) return null;
        // 조회값이 있는 경우
        PersonDTO info = new PersonDTO();
        info.setId(person.getId());
        info.setPw(person.getPw());
        info.setName(person.getName());
        info.setNickname(person.getId()+person.getName());
        return info;
    }

    public void updatePerson(PersonDTO personDTO) {
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.updatePerson(person);
    }

    public void deletePerson(PersonDTO personDTO) {
        personMapper.deletePerson(personDTO.getId());
    }
}
