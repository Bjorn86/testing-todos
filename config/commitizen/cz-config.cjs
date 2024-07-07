module.exports = {
  types: [
    { value: 'ci', name: 'ci:        Настройка CI и работа со скриптами' },
    { value: 'feat', name: 'feat:      Добавление нового функционала' },
    { value: 'fix', name: 'fix:       Исправление ошибок' },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    { value: 'test', name: 'test:      Добавление тестов' },
    {
      value: 'chore',
      name: 'chore:     Работа над инфраструктурой проекта, не влияющая на код (установка/удаление библиотек, работа с документацией, стилями, и т.д.)',
    },
    {
      value: 'merge',
      name: 'merge:     Объединение веток или разрешение конфликтов',
    },
  ],
  messages: {
    type: 'Какие изменения вы вносите?',
    subject: 'Напишите номер задачи и короткое описание не более 72-х символов:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },
  skipQuestions: ['body', 'footer', 'scope', 'breaking'],
  skipEmptyScopes: true,
  allowBreakingChanges: false,
  subjectLimit: 72,
};
