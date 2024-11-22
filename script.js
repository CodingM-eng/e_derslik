// Basit kullanıcı verileri
const users = [
    { id: 1, role: 'manager', name: 'Maşallah İsgenderli', email: 'codingdevelopia@gmail.com', password: '13241789Jalal' }
];

const loginBtn = document.getElementById('login-btn');
const addTeacherBtn = document.getElementById('add-teacher-btn');
const addStudentBtn = document.getElementById('add-student-btn');
const userList = document.getElementById('user-list');

// Giriş yapma
loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Добро пожаловать, ' + user.name);
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'block';
        updateUserList();
    } else {
        alert('Неверный email или пароль');
    }
});

// Kullanıcı listesi güncelleme
function updateUserList() {
    userList.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `${user.role.toUpperCase()}: ${user.name}`;
        userList.appendChild(userDiv);
    });
}

// Yeni öğretmen ekleme
addTeacherBtn.addEventListener('click', () => {
    const name = prompt('Введите имя учителя:');
    const email = prompt('Введите email учителя:');
    const password = prompt('Введите пароль учителя:');

    if (name && email && password) {
        users.push({ id: users.length + 1, role: 'teacher', name, email, password });
        updateUserList();
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
        updateUserList();
        alert('Студент успешно добавлен!');
    }
});
