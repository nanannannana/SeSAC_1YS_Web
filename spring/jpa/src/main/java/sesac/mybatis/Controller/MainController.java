package sesac.mybatis.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sesac.mybatis.domain.User;
import sesac.mybatis.domain.UserEntity;
import sesac.mybatis.dto.UserDTO;
import sesac.mybatis.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {

    @Autowired
    MainService mainService;

    @GetMapping("/users")
    public String getUser(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }

    @GetMapping("user/insert")
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        UserEntity user = new UserEntity();
        user.setName(name);
        user.setNickname(nickname);

        mainService.addUser(user);

        model.addAttribute("list", null);
        return "user";
    }

    @GetMapping("/user")
    public String getUser(@RequestParam String name, Model model) {
        ArrayList<UserDTO> userList = mainService.getUserName(name);

        model.addAttribute("list", userList);
        return "user";
    }
}
