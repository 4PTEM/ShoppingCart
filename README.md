# Запуск приложения
## Подготовка
Поставьте Docker и запустите команду
```
docker run --name postgresql -e POSTGRES_PASSWORD=randompassword -e POSTGRES_USER=johndoe -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
```
Склонируйте проект, выполните команды
```
cd ShoppingCart
npm ci
```
Создайте .env файл в корне проекта с таким содержимым:
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
## Запуск проекта
В корне проекта выполните команду
```
npm run start
```
