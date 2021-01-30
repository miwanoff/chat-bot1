$(function () {
  const phrases = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!",
    "С Вами очень приятно общаться!",
  ];
  const hello = "Привет, я бот Вася!";
  const goodbye = "До свидания!";
  const bye = "Пока!";

  $("h1").css("color", "red");

  $("#answers").append(`<div class="bot_answ">${hello}</div>`);

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });

  $("#question").click(function () {
    return false;
  });

  $("#answers").click(function () {
    return false;
  });

  $("#ok").click(function () {
    return false;
  });
});
