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
// Firebase örneği ile kullanıcı kaydetme
import { getDatabase, ref, set } from "firebase/database";

function saveUser(user) {
    const db = getDatabase();
    set(ref(db, 'users/' + user.id), user)
        .then(() => alert('Kullanıcı kaydedildi!'))
        .catch(error => alert('Hata: ' + error.message));
}
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

function sendSms(phoneNumber, code) {
    client.messages
        .create({
            body: `Ваш код подтверждения: ${code}`,
            from: '+1234567890', // Twilio telefon numarası
            to: phoneNumber
        })
        .then(message => console.log(message.sid))
        .catch(error => console.error(error));
}


// Kullanıcı listesi güncelleme
function updateUserList() {
    userList.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `${user.role.toUpperCase()}: ${user.name}`;
        userList.appendChild(userDiv);
    });
}
// Örnek öğretmen verileri
const teacherData = [
    { day: '2024-11-22', subject: 'Математика', grade: 5 },
    { day: '2024-11-23', subject: 'Физика', grade: 4 }
];

// Tabloyu güncelleyen fonksiyon
function updateTeacherTable() {
    const tableBody = document.getElementById('teacher-table-body');
    tableBody.innerHTML = ''; // Eski verileri temizle
    teacherData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.day}</td>
            <td>${entry.subject}</td>
            <td>${entry.grade}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonksiyonu çağırarak tabloyu güncelle
updateTeacherTable();


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
