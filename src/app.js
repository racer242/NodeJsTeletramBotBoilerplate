/**
 * App initialization
 */

import express from "express";
import createError from "http-errors";
import logger from "morgan";

import path from "path";

import TelegramBot from "./sampleBot/SampleBot";

const telegramBot = new TelegramBot();

telegramBot.init();

telegramBot.start();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(telegramBot.webhookCallback());

app.get("/", async (req, res) => {
  res.json({ status: true, message: "Our node.js app works" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.end(err.message);
});

export default app;
