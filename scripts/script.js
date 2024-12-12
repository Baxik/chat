



// Функция для загрузки сообщений из localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых сообщений

    messages.forEach(function(message) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        messagesContainer.appendChild(newMessage);
    });
}

// Обработка отправки формы
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const message = document.getElementById('message').value; // Получаем текст сообщения

    if (message.trim() !== '') { // Проверка на пустое сообщение
        // Загружаем текущие сообщения из localStorage
        const messages = JSON.parse(localStorage.getItem('messages')) || [];

        // Добавляем новое сообщение
        messages.push(message);

        // Сохраняем обновлённый список сообщений в localStorage
        localStorage.setItem('messages', JSON.stringify(messages));

        // Загружаем сообщения в контейнер
        loadMessages();

        // Очистить поле ввода
        document.getElementById('message').value = '';
    } else {
        alert('Пожалуйста, введите сообщение.');
    }
});

// Загрузка сообщений при первой загрузке страницы
window.onload = loadMessages;