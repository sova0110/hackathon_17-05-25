package ru.itgirl.hackathon_170525.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.itgirl.hackathon_170525.model.Teacher;

import java.io.File;
import java.io.IOException;

@Controller
public class TeacherController {

    @GetMapping("/electronicDiary/teacher")
    public String teacher(Model model) throws IOException {
        File jsonFile = new File("src/main/resources/teacher.json");
        ObjectMapper mapper = new ObjectMapper();
        Teacher teacher = mapper.readValue(jsonFile, Teacher.class);
        model.addAttribute("teacher", teacher);
        return "teacher";
    }
}