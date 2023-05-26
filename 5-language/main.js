let userLang = prompt("Укажите язык...");

switch (userLang) {
  case "ru":
    console.log("Добрый день!");
    break;
  case "en":
    console.log("Good afternoon!");
    break;
  case "de":
    console.log("Guten tag!");
    break;
  default:
    console.log("Укажите один из известных мне языков. (ru, en, de)");
}
