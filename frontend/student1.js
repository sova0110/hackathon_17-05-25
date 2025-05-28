const studentData = {
    "subject": "Математика",
    "student": {
        "name": "Иван Иванов",
        "class": "6",
        "grades": [
            { "topic": "Дроби", "grade": 5, "date": "2025-09-15" },
            { "topic": "Сложение дробей", "grade": 4, "date": "2025-09-22" },
            { "topic": "Вычитание дробей", "grade": 3, "date": "2025-09-29" },
            { "topic": "Умножение дробей", "grade": 5, "date": "2025-10-06" },
            { "topic": "Деление дробей", "grade": 4, "date": "2025-10-13" },
            { "topic": "Углы", "grade": 3, "date": "2025-10-20" },
            { "topic": "Проценты", "grade": 5, "date": "2025-10-27" },
            { "topic": "Десятичные дроби", "grade": 3, "date": "2025-11-03" }
        ],
        "revision_topics": [
            "1. Основы работы с дробями",
            "2. Сложение дробей с одинаковыми знаменателями",
            "3. Сложение дробей с разными знаменателями",
            "4. Вычитание дробей с одинаковыми знаменателями",
            "5. Вычитание дробей с разными знаменателями",
            "6. Умножение дробей",
            "7. Деление дробей",
            "8. Углы: определение и виды",
            "9. Проценты: понятие и расчет",
            "10. Десятичные дроби и их преобразование"
        ],
        "mini_tests": [
            { "topic": "Дроби", "link": "https://example.com/mini-test-drobi" },
            { "topic": "Углы", "link": "https://example.com/mini-test-ugly" },
            { "topic": "Проценты", "link": "https://example.com/mini-test-procenty" },
            { "topic": "Десятичные дроби", "link": "https://example.com/mini-test-desyatochnye-drobi" }
        ]
    }
};

// Заполнение данных на странице
document.getElementById('subject-name').textContent = studentData.subject;

const gradesTableBody = document.getElementById('grades-table').querySelector('tbody');
studentData.student.grades.forEach(grade => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${grade.topic}</td><td>${grade.grade}</td><td>${grade.date}</td>`;
    gradesTableBody.appendChild(row);
});

const revisionTopicsList = document.getElementById('revision-topics-list');
studentData.student.revision_topics.forEach(topic => {
    const listItem = document.createElement('li');
    listItem.textContent = topic;
    revisionTopicsList.appendChild(listItem);
});

const miniTestsList = document.getElementById('mini-tests-list');
studentData.student.mini_tests.forEach(test => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${test.link}" target="_blank">${test.topic}</a>`;
    miniTestsList.appendChild(listItem);
});