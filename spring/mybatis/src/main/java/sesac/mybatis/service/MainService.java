package sesac.mybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.mybatis.domain.User;
import sesac.mybatis.dto.UserDTO;
import sesac.mybatis.mapper.MainMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;

    // 1. userDTO가 담겨있는 list를 Controller에 전달
    public List<UserDTO> getUserList(){
        // result = mysql에서 받아온 데이터
        // users = userDTO가 담겨있는 arraylist 생성
        List<User> result = mainMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        // 반복문을 통해 result 값울 userDTO에 저장
        // + 번호값 추가
        for (int i=0 ; i<result.size() ; i++) {
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        // userDTO가 담겨있는 list return
        return users;
    }

    // 2. User 클래스 값 mainMapper로 전달
    public void addUser(User user) {mainMapper.insertUser(user);}
}
