const studentModal = document.getElementById("student__modal");
const openModal = document.getElementById("button__modal__rec");
openModal.addEventListener("click", async () => {
    try {
        const response = await fetch("student.json");
        const studentData = await response.json();

        studentModal.style.display = "grid";
        studentModal.innerHTML = `<h3 class="student__tittle">Рекомендации по улучшению оценок</h3>`;
        const lowGrades = studentData.student.grades.filter(g => g.grade < 4);
    
        if (lowGrades.length === 0) {
            studentModal.innerHTML += `<p>У тебя нет слабых тем. Отличная работа!</p>`;
            return;
        }

    lowGrades.forEach(({ topic }) => {
        const miniTest = studentData.student.mini_tests.find(test => test.topic === topic);
        const theoryLink = `https://example.com/theory/${topic.toLowerCase().replace(/\s+/g, '-')}`;
        const additionalLink = `https://example.com/material/${topic.toLowerCase().replace(/\s+/g, '-')}`;
        studentModal.innerHTML += `
        <div class="recommendation__block">
            <p>Твоя слабая тема: ${topic}</p>
            <p>Посмотри теорию: <a href="${theoryLink}" target="_blank">${theoryLink}</a></p>
            <p>Посмотри доп. материал: <a href="${miniTest ? miniTest.link : additionalLink}" target="_blank">${miniTest ? miniTest.link : additionalLink}</a></p>
        </div>
    `;
    });
} catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    studentModal.innerHTML = `<p>Ошибка загрузки рекомендаций.</p>`;
    }
});

studentModal.addEventListener("click", (event) => {
    const modalContent = document.getElementById("student__modal__content");
    if (!modalContent.contains(event.target)) {
        studentModal.style.display = "none";
    }
});