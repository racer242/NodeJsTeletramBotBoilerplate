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
    canceled: `The keyboard is closed`,
    tested: `Tested!`,
    key: `Here is an example of a keyboard:`,
    before: "Counter equals: ${c}",
    increased: "Counter increased: ${c}",
    commands: {
      help: "I'll help in any way I can",
      key: "Keyboard example",
      inc: "Increment counter",
    },
    buttons: {
      inline: "This is a check button",
    },
    keyboards: {
      cancel: "✖️ Cancel",
      test: "☝️ Check",
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
