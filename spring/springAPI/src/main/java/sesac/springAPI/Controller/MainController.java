package sesac.springAPI.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.springAPI.DTO.UserDTO;
import sesac.springAPI.DTO.UserFormDTO;
import sesac.springAPI.VO.UserFormVO;
import sesac.springAPI.VO.UserVO;

import java.util.Objects;

@Controller
public class MainController {
    //get 방식
    @GetMapping("/")
    public String main() {
        return "request";
    }
    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam String name, Model model) {
        // required = true는 default
        // 보낸 값과 변수명이 일치 or 보낸 값을 첫 번째 인자로 넣어주고 변수명 다르게 지정
        // @RequestParam String name
        // @RequestParam("name") String name2
        
        // name값 response.html 로 전송
        model.addAttribute("name", name);
        return "response";
    }
    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(required = false) String name, Model model) {
        // required = true인 경우, name값 필수 => name값이 없을 경우, 주소 자체를 읽지 못함
        // false일 경우, name값이 없어도 넘어가짐
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String AGE, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", AGE);
        return "response";
    }
    
    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String AGE, Model model) {
        // 필수값: name, 선택값: age 관련 처리
        model.addAttribute("name", name);
        model.addAttribute("age", AGE);
        return "response";
    }

    @GetMapping("/introduce/{name}")
    public String introduce(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "getPractice";
    }

    @GetMapping("/introduce2")
    public String introduce2(@RequestParam String name,@RequestParam int age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "getPractice";
    }

    //post 방식
    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody // res.send() 파일을 렌더 하는 게 아닌 값을 전달
    public String postAPI3(@RequestParam(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "이름은 : " + name;
    }

    @GetMapping("/start")
    public String start() {
        return "postPractice";
    }
    @PostMapping("/practice2")
    public String practice2(@RequestParam String name, @RequestParam String gender, @RequestParam String year, @RequestParam String month, @RequestParam String date, @RequestParam String interest, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("date", date);
        model.addAttribute("interest", interest);
        return "postResponse";
    }

    // DTO 수업
    @GetMapping("/dto/response1")
    @ResponseBody //res.send
    public String dtoAPI1(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoAPI3(@RequestBody UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    // VO 수업
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    @PostMapping("/vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    @PostMapping("/vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    // axios DTO 수업
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 " + age;
        return msg;
    }
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    // axios VO 수업
    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 " + age;
        return msg;
    }

    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosVoAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 " + age;
        return msg;
    }
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVoAPI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosVoAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 " + age;
        return msg;
    }

    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVoAPI4(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVoAPI5(@RequestBody UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    // axios 실습
    @PostMapping("/axios/practice1")
    @ResponseBody
    public String axiosPractice(@RequestBody UserVO userVO) {
        String msg = userVO.getName()+"회원가입 성공";
        return msg;
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "index";
    }
    @GetMapping("/signup")
    public String signup() {
        return "signup";
    }
    @PostMapping("/signup")
    @ResponseBody
    public String signupSubmit(@RequestBody UserFormDTO userFormDTO) {
        String msg = userFormDTO.getName()+"님 회원가입을 환영합니다.";
        return msg;
    }
    @GetMapping("/login")
    public String login() {
        return "login";
    }
    @PostMapping("/login")
    @ResponseBody
    public String loginSubmit(@RequestBody UserFormDTO userFormDTO) {
        UserFormVO userInfo = new UserFormVO();
        String msg;
        if(userInfo.getId().equals(userFormDTO.getId()) && userInfo.getPw().equals(userFormDTO.getPw())) msg="success";
        else msg="fail";
        return msg;
    }

    @GetMapping("/my-info")
    public String my_info(Model model) {
        UserFormVO userInfo = new UserFormVO();
        model.addAttribute("id", userInfo.getId());
        model.addAttribute("pw", userInfo.getPw());
        model.addAttribute("name", userInfo.getName());
        return "my-info";
    }

    @PatchMapping("/my-info")
    @ResponseBody
    public String patchInfo(@RequestBody UserFormDTO userFormDTO, Model model) {
        model.addAttribute("id", userFormDTO.getId());
        model.addAttribute("pw", userFormDTO.getPw());
        model.addAttribute("name", userFormDTO.getName());
        return "change";
    }

    @DeleteMapping("/my-info")
    @ResponseBody
    public String deleteInfo(@RequestBody UserFormDTO userFormDTO) {
        UserFormVO userInfo = new UserFormVO();
        if(userInfo.getId().equals(userFormDTO.getId())) {
            userFormDTO.setId("");
            userFormDTO.setPw("");
            userFormDTO.setName("");
        }
        return "success";
    }
}
