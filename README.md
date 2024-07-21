# Testing Todos

![CI/CD workflow](https://github.com/Bjorn86/testing-todos/actions/workflows/ci-cd.yml/badge.svg?event=push)

Проект представляет из себя одностраничное приложение для записи текущих дел. Также позволяет фильтровать заметки по статусу их завершённости.

## Оглавление

- [Обзор проекта](#обзор-проекта)
  - [Задачи проекта](#задачи-проекта)
  - [Функциональность проекта](#функциональность-проекта)
  - [Screenshot](#screenshot)
  - [Запуск проекта](#запуск-проекта)
  - [Ссылки](#ссылки)
  - [Используемые технологии и методологии](#используемые-технологии-и-методологии)
- [Автор](#автор)

## Обзор проекта

### Задачи проекта

Предоставить пользователям возможность делать заметки о текущих делах.

### Функциональность проекта

- Создание заметки о текущей задаче
- Изменение статуса заметки (завершена/не завершена)
- Фильтрация заметок по статусу завершённости
- Удаление завершённых задач

### Screenshot

![screenshot](/screenshots/testing-todos-1.png)

### Запуск проекта

- `npm start` - режим разработки с запуском локального сервера
- `npm run commit` - запуск commitizen для коммита
- `npm run lint` - запуск линтера
- `npm run lint:fix` - запуск линтера в режиме исправления
- `npm run format` - запуск Prettier
- `npm run build:dev` - сборка бандла в режиме разработки
- `npm run build:prod` - сборка бандла в режиме продакшена (для служебных сценариев)
- `npm run build` - сборка бандла в режиме продакшена
- `npm run analyze` - запуск webpack-bundle-analyzer для анализа бандла
- `npm run typecheck` - запуск проверки типов
- `npm run test` - запуск Jest
- `npm run test:coverage` - запуск Jest в режиме покрытия
- `npm run prepare` - инициализация Husky (выполняется автоматически, единожды, при первичной установке зависимостей)

### Ссылки

- [Ссылка на демо-страницу проекта](https://testing-todos-2b321.web.app/)

### Используемые технологии и методологии

- Технологии
  - HTML
  - Styled components
  - TS
  - React
  - React Router
  - Jest
  - React Testing Library
  - React Hook Form
  - Firebase
- Методологии
  - Feature-Sliced Design

## Автор

**Данила Легкобытов**

- e-mail: [legkobytov-danila@yandex.ru](mailto:legkobytov-danila@yandex.ru)
- LinkedIn: [in/danila-legkobytov](https://www.linkedin.com/in/danila-legkobytov/)
- Telegram: [@danila_legkobytov](https://t.me/danila_legkobytov)
- Frontend Mentor: [@danila_legkobytov](https://www.frontendmentor.io/profile/Bjorn86)
