package sesac.mybatis.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.mybatis.domain.Person;
import sesac.mybatis.dto.PersonDTO;
import sesac.mybatis.service.PersonService;

@Controller
// @RestController // personController 안에 있는 모든 함수들이 @ResponseBody가 붙음
@RequestMapping("/person") // 아래에 있는 모든 url 앞에 '/person' 주소가 붙음
public class PersonController {

    // @Autowired - 의존성 주입 어노테이션
    @Autowired
    PersonService personService;

    @GetMapping("/register")
    public String getRegister() {
        return "register";
    }
    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO) {
        // DB에 data를 넣기
        personService.insertPerson(personDTO);
        return "";
    }

    @GetMapping("/login")
    public String getLogin() {
        return "login";
    }
    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO) {
        // axios 전송 시, @RequestBody 어노테이션 필요
        PersonDTO person = personService.getPerson(personDTO);
        if (person == null) return false;
        else return true;
    }

    @PostMapping("/info")
    public String postInfo(PersonDTO personDTO, Model model) {
        // 일반 폼 전송 시, @RequestBody 필요X
        // login페이지에서 로그인 성공 시, 데이터(id,pw) info페이지로 전송
        // 전송된 데이터로 DB에 사용자 조회

        // person 객체: DB에서 받아 온 사용자 정보 들어있음
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person",person);
        return "info";
    }

    @PostMapping("/info/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO) {
        personService.updatePerson(personDTO);
        return "";
    }

    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO) {
        personService.deletePerson(personDTO);
        return "";
    }
}
