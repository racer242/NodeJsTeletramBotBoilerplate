const locales = {
  en: {
    isDefault: true,
    start: `👋 Hello! I'm a bot 🤖!
I serve people 👨‍👩‍👦‍👦.
Write something ✍️.
I will translate it into another language 📓
    `,
    help: `How can I help you man?
    `,
    commands: {
      help: "I'll help in any way I can",
    },
  },
  ru: {
    start: `👋 Привет! Я бот 🤖!
Я служу человекам 👨‍👩‍👦‍👦.
`,
    help: `Чем тебе помочь, человек❓
    `,
    canceled: `Клавиатура закрыта`,
    tested: `Проверено!`,
    key: `Вот пример клавиатуры:`,
    before: "Счетчик равен: ${c}",
    increased: "Счетчик увеличен: ${c}",
    commands: {
      help: "Помогу, чем смогу",
      key: "Пример клавиатуры",
      inc: "Увеличить счетчик",
    },
    buttons: {
      inline: "Это кнопка для проверки",
    },
    keyboards: {
      cancel: "✖️ Отмена",
      test: "☝️ Проверка",
    },
  },
};

export default locales;
