package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.ArrayList;

@Controller
public class HelloController {
    @GetMapping("/hi") // = app.get
    public String getHi(Model model) {
        model.addAttribute("msg", "Hello");
        model.addAttribute("utext", "<strong>utext입니다.</strong>");
        return "hi"; // = res.render("hi"), 리턴값 view파일로 인식
    };

    @GetMapping("/temp")
    public String temp(Model model) {
        String[] names = {"kim","lee","hong","seo"};
        model.addAttribute("names", names);
        return "temp";
    }

    @GetMapping("/practice1")
    public String getPractice(Model model) {
        model.addAttribute("age", 20);
        return "practice1";
    };

    public static class Person {
        private int age;
        private String name;

        public Person(String name, int age) {
            setAge(age);
            setName(name);
        }

        public int getAge() {
            return age;
        }
        public String getName() {
            return name;
        }
        public void setAge(int age) {
            this.age = age;
        }
        public void setName(String name) {
            this.name = name;
        }
    }

    @GetMapping("/people")
    public String getPeople(Model model) {
        ArrayList<Person> person = new ArrayList<>();
        person.add(new Person("kim", 10));
        person.add(new Person("seo", 20));
        person.add(new Person("lee", 30));
        person.add(new Person("park", 40));
        model.addAttribute("person", person);
        return "practice2";
    }
}


