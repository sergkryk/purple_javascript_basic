// список привычек -------------------------------
const navigation = document.querySelector(".nav__items");
// кнопка добавления привычки  ------------------------------
const addButton = document.querySelector(".nav__button");
// форма добавления привычки  ------------------------------
const habbitForm = document.querySelector(".add");
// модальное окно  ------------------------------
const modal = document.querySelector(".modal");
// кнопка закрытия модального окно  ------------------------------
const closeModalButton = document.querySelector(".add__close");
// форма добавления дня в привычку
const dayForm = document.querySelector(".habbit__form");
// кнопка отправки формы добавления дня в привычку
const dayFormSubmit = document.querySelector(".habbit__submit");
// инпут формы добавления дня в привычку
const dayFormInput = dayForm.querySelector("#comment");
// основной заголовок ------------------------------------------
const mainTitle = document.querySelector(".habbit__title");
// процент выполнения ------------------------------------------
const percent = document.querySelector(".bar__percent");
// индикатор выполнения ------------------------------------------
const indicator = document.querySelector(".bar__indicator");

// Выбранная привычка -----------------------------------------
let activeDomNode = "";
let activeElement = "";

const DAYS_TO_FINISH = 21;

const habbits = JSON.parse(localStorage.getItem("habbits")) || [];

// const habbits = [
//   {
//     id: 1687273794339,
//     title: "Отжимания",
//     aim: "Научится отжиматься",
//     icon: "dumble",
//     days: ["Первый подход всегда даётся тяжело"],
//   },
//   {
//     id: 1687273864156,
//     title: "Чтение",
//     aim: "Читать не менее 30 минут в день",
//     icon: "bottle",
//     days: ["Прочитал 20 страниц", "Начал читать новую интересную книгу"],
//   },
// ];

function escPressHandler(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

function openModal() {
  modal.classList.add("modal--visible");
  document.addEventListener("keydown", escPressHandler);
}

function closeModal() {
  modal.classList.remove("modal--visible");
  document.removeEventListener("keydown", escPressHandler);
}

function removeDay(day) {
  activeElement.days = activeElement.days.filter((el) => el !== day);
}

function addDay(comment) {
  activeElement.days.push(comment);
}

function disableForm(form) {
  const submit = form.querySelector("[type='submit']");
  const formInputs = form.querySelectorAll("input");
  submit.setAttribute("disabled", true);
  formInputs.forEach(el => el.setAttribute("disabled", true));
  form.setAttribute("disabled", true);
}

function enableForm(form) {
  const submit = form.querySelector("[type='submit']");
  const formInputs = form.querySelectorAll("input");
  submit.removeAttribute("disabled");
  formInputs.forEach(el => el.removeAttribute("disabled"));
  form.removeAttribute("disabled");
}

function calcPercent() {
  const isDisabled = dayForm.getAttribute("disabled");
  const progress = Math.floor(activeElement.days.length / DAYS_TO_FINISH * 100);
  percent.textContent = `${progress}%`;
  indicator.setAttribute("style", `--barWidth: ${progress}%`);
  
  if (progress >= 100) {
    disableForm(dayForm);
    return;
  }
  if (isDisabled) {
    enableForm(dayForm);
  }
}

function renderDayCounter(num) {
  const div = document.createElement("div");
  div.classList.add("habbit__counter");
  div.textContent = `День ${num}`;
  return div;
}

function renderDayComment(comment) {
  const p = document.createElement("p");
  p.classList.add("habbit__comment");
  p.textContent = comment;
  return p;
}

function renderDayDelete(day) {
  const button = document.createElement("button");
  button.classList.add("habbit__delete");
  button.innerHTML = '<svg width="18" height="19" fill="none"><use xlink:href="#icon-trash"></use></svg>';
  button.setAttribute("type", "button");
  button.addEventListener("click", () => {
    removeDay(day);
    updateContent();
  });
  return button;
}

function renderDay(day, index) {
  const item = document.createElement("li");
  const body = document.createElement("div");
  item.classList.add("habbit__day");
  body.classList.add("habbit__body");
  item.append(renderDayCounter(index + 1), body);
  body.append(renderDayComment(day), renderDayDelete(day));
  return item;
}

function renderNavItem(habbit) {
  const li = document.createElement("li");
  li.classList.add("nav__item");
  li.innerHTML = `<a href="#" class="nav__link"><svg width="25" height="25" fill="none" viewBox="0 0 25 25"><use xlink:href="#icon-${habbit.icon}"></use></svg></a>`;
  li.setAttribute("data-id", habbit.id);
  li.addEventListener("click", (evt) => {
    const id = evt.target.parentElement.getAttribute("data-id");
    setActive(id);
  });
  return li;
}

function updateNavigation() {
  navigation.innerHTML = "";
  habbits.map(renderNavItem).forEach((el) => {
    navigation.append(el);
  });
}

function updateContent() {
  const { title, days } = activeElement;
  const daysList = document.querySelector(".habbit__days");
  const counter = document.querySelector(".js-counter");
  
  mainTitle.textContent = title;
  counter.textContent = `День ${days.length + 1}`;
  daysList.innerHTML = "";
  days.map((day, index) => {
    daysList.append(renderDay(day, index));
  });
  calcPercent();
  localStorage.setItem("habbits", JSON.stringify(habbits));
}

function setActive(id) {
  const index = habbits.findIndex((el) => el.id === Number(id));
  const active = document.querySelector(`[data-id="${id}"]`);
  const activeClass = "nav__item--active";

  if (active.classList.contains(activeClass)) {
    return;
  }
  if (activeDomNode && activeDomNode.classList.contains(activeClass)) {
    activeDomNode.classList.remove(activeClass);
  }
  
  active.classList.add(activeClass);
  activeDomNode = active;
  activeElement = habbits[index];
  updateContent();
}

function addHabbit({ title, aim, icon }) {
  const id = new Date().getTime();
  const days = [];
  habbits.push({ id, title, aim, icon, days });
  updateNavigation();
  setActive(id);
}

function processFormData(form) {
  const response = new FormData(form);
  const data = {};
  for (const [key, value] of response) {
    data[key] = value;
  }
  form.reset();
  return data;
}

// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ -------------------------------------------

addButton.addEventListener("click", () => {
  openModal();
});

closeModalButton.addEventListener("click", () => {
  closeModal();
});

habbitForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newHabbit = processFormData(habbitForm);
  addHabbit(newHabbit);
  closeModal();
});

dayForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const { comment } = processFormData(dayForm);
  addDay(comment);
  updateContent();
});

window.addEventListener("load", () => {
  updateNavigation();
  setActive(habbits[0].id);
});
