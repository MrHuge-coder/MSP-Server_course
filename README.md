# MSP-Server_course | Node.js Branch
## стек технологий:
### client:
* hbs
* html
* css
* sass
* js
### backend:
* node js
* express
* mongodb
* passport

### Архитектура: 
* создание моделей + mongodb
* клиент часть : (layouts, materialize, public(распространение стилей на весь проект по префиксу), partails(особенность движка хэндэлбарс)
* сервер(подключение зависимостей, порт через глобальные процессы, сеты/юзы, прослушка порта и коннект к бд) + passport(авторизация(login/logout)/регистрация) + hashed passwords + работа с сессиями 
*роуты(get/post/push/del асинхронность (async/await)(разгрузка сервер файла + адаптивность для работы с разными сущностями и наращиванием функционала)

### Функции
* Добавить пост
* Удалить пост
* Регисрация
* Login/Logout
* Сессия 
* hash JWT password

### Финал:
* Deploy
