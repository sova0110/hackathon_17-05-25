package ru.itgirl.hackathon_170525.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.itgirl.hackathon_170525.model.Student;

import java.io.File;
import java.io.IOException;

@Controller
public class StudentController {

    @GetMapping("/electronicDiary/student")
    public String student(Model model) throws IOException {
        File jsonFile = new File("src/main/resources/student.json");
        ObjectMapper mapper = new ObjectMapper();
        Student student = mapper.readValue(jsonFile, Student.class);
        model.addAttribute("student", student);
        return "student";
    }
}