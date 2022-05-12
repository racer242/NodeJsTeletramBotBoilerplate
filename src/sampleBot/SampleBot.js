import { Markup } from "telegraf";
import TelegramBot from "../telegramBot/TelegramBot";

/**
 * Sample class for telegram bot
 * Class implements user mechanics
 */
class Sample extends TelegramBot {
  async initCtx(ctx) {
    ctx.session ??= { counter: 0 };
  }

  async getCommandsMenu(ctx) {
    return [
      { command: "/help", description: ctx.i18n.t("commands.help") },
      { command: "/key", description: ctx.i18n.t("commands.key") },
      { command: "/inc", description: ctx.i18n.t("commands.inc") },
    ];
  }

  async replyHelp(ctx) {
    await ctx.replyWithHTML(
      ctx.i18n.t("help"),
      Markup.inlineKeyboard([
        Markup.button.callback(ctx.i18n.t("buttons.inline"), "test"),
      ])
    );
  }

  async init(params) {
    await super.init(params);

    this.bot.command("key", async (ctx) => {
      ctx.replyWithHTML(
        ctx.i18n.t("key"),
        Markup.keyboard([
          [ctx.i18n.t("keyboards.cancel")],
          [ctx.i18n.t("keyboards.test")],
        ])
          .oneTime()
          .resize()
      );
    });

    this.bot.command("inc", async (ctx) => {
      await ctx.replyWithHTML(ctx.i18n.t("before", { c: ctx.session.counter }));
      ctx.session.counter += 1;
      await ctx.replyWithHTML(
        ctx.i18n.t("increased", { c: ctx.session.counter })
      );
    });

    this.bot.action("test", async (ctx) => {
      ctx.replyWithHTML(ctx.i18n.t("tested"));
    });

    this.bot.on("sticker", (ctx) => {
      if (ctx.update?.message?.sticker?.emoji) {
        ctx.reply(ctx.update.message.sticker.emoji);
      } else {
        ctx.reply("🤷‍♂️");
      }
    });

    this.bot.hears(/✖️ .+/, async (ctx) => {
      ctx.replyWithHTML(ctx.i18n.t("canceled"), Markup.removeKeyboard());
    });
    this.bot.hears(/☝️ .+/, async (ctx) => {
      ctx.replyWithHTML(ctx.i18n.t("tested"), Markup.removeKeyboard());
    });
  }
}

export default Sample;
