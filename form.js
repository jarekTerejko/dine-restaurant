const form = document.querySelector(".form");
const AMPM = document.querySelector(".form__am-pm-selected");
const timeText = AMPM.firstElementChild;
const amPmOptions = document.querySelector(".form__am-pm-options");
const optionTime = document.querySelectorAll(".form__option-time");
const checkIcons = document.querySelectorAll(".form__icon-check");
const userName = document.querySelector(".form__name");
const mail = document.querySelector(".form__email");
const month = document.querySelector(".form__month");
const date = document.querySelector(".form__date");
const year = document.querySelector(".form__year");
const hour = document.querySelector(".form__hour");
const minute = document.querySelector(".form__minute");
const errorMsg = document.querySelectorAll(".form__error");

const peopleBtns = document.querySelectorAll(".form__people-btn");
let peopleCounter;
peopleCounter = 6;
const guestsNumber = document.querySelector(".form__guests-number");
const guestsWord = document.querySelector(".form__guests-word");
guestsNumber.textContent = peopleCounter;

peopleBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("form__icon-minus")) {
      if (peopleCounter > 1) {
        peopleCounter--;
        guestsNumber.textContent = peopleCounter;
      }
    } else {
      if (peopleCounter === 10) return;
      peopleCounter++;
      guestsNumber.textContent = peopleCounter;
    }
    peopleCounter > 1
      ? (guestsWord.textContent = "people")
      : (guestsWord.textContent = "person");
  });
});

AMPM.addEventListener("click", (e) => {
  amPmOptions.classList.toggle("form__am-pm-options--active");
});

optionTime.forEach((option) => {
  option.addEventListener("click", (e) => {
    const checkIcon = option.firstElementChild;
    checkIcons.forEach((icon) => {
      icon.classList.remove("form__icon-check--visible");
    });
    checkIcon.classList.add("form__icon-check--visible");
    const text = option.lastElementChild.textContent;
    timeText.textContent = text;
    amPmOptions.classList.remove("form__am-pm-options--active");
  });
});

form.addEventListener("submit", (e) => {
  checkInputs();
  e.preventDefault();
});

const isMailValid = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const setInputError = (input) => {
  input.classList.add("form__input-error");
  input.classList.remove("form__input-success");
};

const setInputSuccess = (input) => {
  input.classList.add("form__input-success");
  input.classList.remove("form__input-error");
};

const setErrorMsg = (msg, i) => {
  errorMsg[i].textContent = msg;
};

const removeErrorMsg = (i) => {
  errorMsg[i].textContent = "";
};

const checkInputs = () => {
  const userNameValue = userName.value.trim();
  const emailValue = mail.value.trim();
  const monthValue = month.value;
  const dateValue = date.value;
  const yearValue = year.value;
  const hourValue = hour.value;
  const minuteValue = minute.value;

  if (userNameValue === "") {
    setInputError(userName);
    setErrorMsg("This field is required", 0);
  } else {
    setInputSuccess(userName);
    removeErrorMsg(0);
  }

  if (emailValue === "") {
    setInputError(mail);
    setErrorMsg("This field is required", 1);
  } else if (!isMailValid(emailValue)) {
    setErrorMsg("Please use a valid email address", 1);
    setInputError(mail);
  } else {
    setInputSuccess(mail);
    removeErrorMsg(1);
  }

  if (monthValue === "") {
    setInputError(month);
  } else {
    setInputSuccess(month);
  }

  if (dateValue === "") {
    setInputError(date);
  } else {
    setInputSuccess(date);
  }

  if (yearValue === "") {
    setInputError(year);
  } else {
    setInputSuccess(year);
  }

  if (monthValue === "" && dateValue === "" && yearValue === "") {
    setErrorMsg("This field is required", 2);
  } else if (monthValue === "" || dateValue === "" || yearValue === "") {
    setErrorMsg("This field is incomplete", 2);
  } else {
    removeErrorMsg(2);
  }

  if (hourValue === "") {
    setInputError(hour);
  } else {
    setInputSuccess(hour);
  }

  if (minuteValue === "") {
    setInputError(minute);
  } else {
    setInputSuccess(minute);
  }

  if (hourValue === "" && minuteValue === "") {
    setErrorMsg("This field is required", 3);
  } else if (hourValue === "" || minuteValue === "") {
    setErrorMsg("This field is incomplete", 3);
  } else {
    removeErrorMsg(3);
  }

  timeText.classList.add("form__input-success");
  document
    .querySelector(".form__guests-count")
    .classList.add("form__input-success");
};
