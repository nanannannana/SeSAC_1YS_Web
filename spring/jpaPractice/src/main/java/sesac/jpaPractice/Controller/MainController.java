package sesac.jpaPractice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sesac.jpaPractice.DTO.UserDTO;
import sesac.jpaPractice.domain.UserEntity;
import sesac.jpaPractice.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {

    @Autowired
    MainService mainService;

    @GetMapping("/")
    public String getUser(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }

    @GetMapping("/insert")
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        UserEntity user = new UserEntity();
        user.setName(name);
        user.setNickname(nickname);

        mainService.addUser(user);

        model.addAttribute("list", null);
        return "user";
    }

    @GetMapping("/update")
    public String getUpdateUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        UserEntity user = new UserEntity();
        user.setName(name);
        user.setNickname(nickname);

        mainService.updateUser(user);

        model.addAttribute("list", null);
        return "user";
    }

    @GetMapping("/delete")
    public String getDeleteUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        UserEntity user = new UserEntity();
        user.setName(name);
        user.setNickname(nickname);

        // id값 보내기
        mainService.DeleteUser(0);

        model.addAttribute("list", null);
        return "user";
    }
}
