package sesac.jpaPractice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.jpaPractice.DTO.UserDTO;
import sesac.jpaPractice.Repository.UserRepository;
import sesac.jpaPractice.domain.UserEntity;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private UserRepository userRepository;

    //1. CREATE
    public void addUser(UserEntity user) {
        userRepository.save(user);
    }

    //2. READ
    public List<UserDTO> getUserList() {
        List<UserEntity> result = userRepository.findAll();
        List<UserDTO> users = new ArrayList<>();
        for (int i=0 ; i<result.size() ; i++) {
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }

    //3. Update
    public void updateUser(UserEntity user) {
        userRepository.save(user);
    }

    public void DeleteUser(UserEntity user) {
        userRepository.delete(user);
    }
}
