// Basit kullanıcı ve öğretmen verileri
const users = [
    { id: 1, role: 'manager', name: 'Maşallah İsgenderli', email: 'codingdevelopia@gmail.com', password: '13241789Jalal' }
];

const teacherData = [
    { day: '2024-11-22', subject: 'Математика', grade: 5 },
    { day: '2024-11-23', subject: 'Физика', grade: 4 }
];

const loginBtn = document.getElementById('login-btn');
const addTeacherBtn = document.getElementById('add-teacher-btn');
const addStudentBtn = document.getElementById('add-student-btn');
const userList = document.getElementById('teacher-table-body');

// Giriş yapma
loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Добро пожаловать, ' + user.name);
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'block';
        updateTeacherTable();
    } else {
        alert('Неверный email или пароль');
    }
});

// Öğretmen tablosunu güncelleme
function updateTeacherTable() {
    userList.innerHTML = ''; // Eski verileri temizle
    teacherData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.day}</td>
            <td>${entry.subject}</td>
            <td>${entry.grade}</td>
        `;
        userList.appendChild(row);
    });
}

// Yeni öğretmen ekleme
addTeacherBtn.addEventListener('click', () => {
    const name = prompt('Введите имя учителя:');
    const email = prompt('Введите email учителя:');
    const password = prompt('Введите пароль учителя:');

    if (name && email && password) {
        users.push({ id: users.length + 1, role: 'teacher', name, email, password });
        alert('Учитель успешно добавлен!');
    }
});

// Yeni öğrenci ekleme
addStudentBtn.addEventListener('click', () => {
    const name = prompt('Введите имя студента:');
    const email = prompt('Введите email студента:');
    const password = prompt('Введите пароль студента:');

    if (name && email && password) {
        users.push({ id: users.length + 1, role: 'student', name, email, password });
        alert('Студент успешно добавлен!');
    }
});
