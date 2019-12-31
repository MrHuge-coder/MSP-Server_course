# MSP-Server_course
---

## Links:
* Y.disk: https://disk.yandex.ru/client/disk/MSP_Server_Course
* Short description of course: https://clck.ru/Le5KD
* Mqtt: https://github.com/donqhomo/AgroHack-SmartGrowBox 



<b>Topic names  </b>              | Lessons numbers | <b>Topic names </b>         | Lessons numbers
----------------------------------|-----------------|-----------------------------|------------------------
<b>1. Network Theory</b>          |   1-2           | <b> 6.Sessions </b>         |
Network protocols                 |   3             | //                          |
IP                                |   4             | //                          |
</b>2. CS - arch </b>             |.................| <b>7 .Setwork Security</b>  |
Client Sending                    |.................|Hash                         |
Clbent Listerning                 |.................|Sql Injection                |
<b>3. Network representation </b> |.................|Session security             |
HTTP representation               |.................|<b>8. Project Public</b>     |
requests                          |.................|dynDNS                       |
<b>4. FW   </b>                   |.................|<b>9. Independent Project</b>|
Flask Server Project              |.................|//                           |
Html insert into flask project    |.................|//                           |
<b>5. Data  </b>                  |.................|<b>10. SmartHouse</b>        |
Json                              |.................|MQTT server                  |
Databases(Mysql - SqlLite)        |.................|MQTT client                  |
Sql connect with Flask            |.................|                             |
UnitTest                          |.................|                             |

---
# Структура 
1. Базовая теория, понимание того, как работаю сервера, как осуществляется подключение и т.д. (части 1-3)																					
2. вся группа вместе с преподавателем начинает создание большого проекта на flask. 																					
3. С каждой новой темой в проект добавляются новые фишки( подключается БД, сессии, безопастность)																					
4. В части 9 - индивидуальный проект по командам. Умение полученные знания применить к собственной идее																					
5. В дз задается сделать некую функцию самостоятельно, на уроке Преподаватель разбирает идельный вариант реализации нужной функции( например на уроке делают регистрацию пользователей, домой задается сделать логин)																					
6. В контрольной проверятся понимание ребенком темы, которую проходиь группа, что он понимает, как работает общий проект																					
7. MQTT или Nodejs (и то и то сделано на практис уровне)	
---
# Краткое описание Nodejs проекта 

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
