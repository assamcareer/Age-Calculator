import "bootstrap/dist/css/bootstrap.min.css";
import getDateOfBirth from "./utils/getDateOfBirth";
import getDaysOptions from "./utils/getDaysOptions";
import populateDaysSelectElement from "./utils/populateDaysSelectedElement";

const dateOfBirthYear = document.getElementById("dob-year");
const dateOfBirthMonth = document.getElementById("dob-month");
const dateOfBirthDay = document.getElementById("dob-day");

const ageAtYear = document.getElementById("age-at-year");
const ageAtMonth = document.getElementById("age-at-month");
const ageAtDay = document.getElementById("age-at-day");

const alertElement = document.getElementById("alert");
const form = document.getElementById("dob-form");
const ageAlert = document.getElementById("age-alert");
const ageTable = document.getElementById("age-table");

// Set the initial value for days
document.addEventListener("DOMContentLoaded", () => {
  const options = getDaysOptions(dateOfBirthYear.value, dateOfBirthMonth.value);
  populateDaysSelectElement(dateOfBirthDay, options, "1");

  // Load LocalStorage
  dateOfBirthDay.value = localStorage.getItem("dobDay") || 8;
  dateOfBirthMonth.value = localStorage.getItem("dobMonth") || 8;
  dateOfBirthYear.value = localStorage.getItem("dobYear") || 2002;

  let today = new Date();
  ageAtDay.value = localStorage.getItem("ageAtDay") || today.getDate();
  ageAtMonth.value = localStorage.getItem("ageAtMonth") || today.getMonth();
  ageAtYear.value = localStorage.getItem("ageAtYear") || today.getFullYear();
});

let previousSelectedDay = dateOfBirthDay.value;

dateOfBirthDay.onchange = (event) => {
  previousSelectedDay = dateOfBirthDay.value;
};

dateOfBirthYear.onchange = () => {
  const options = getDaysOptions(dateOfBirthYear.value, dateOfBirthMonth.value);
  populateDaysSelectElement(dateOfBirthDay, options, previousSelectedDay);
};

dateOfBirthMonth.onchange = () => {
  const options = getDaysOptions(dateOfBirthYear.value, dateOfBirthMonth.value);
  populateDaysSelectElement(dateOfBirthDay, options, previousSelectedDay);
};

// Age at Section

// Set the initial value for days
let todayDate = new Date().getDate().toString();
document.addEventListener("DOMContentLoaded", () => {
  const options = getDaysOptions(ageAtYear.value, ageAtMonth.value);
  populateDaysSelectElement(ageAtDay, options, todayDate);
});

let previousSelectedAgeAtDay = ageAtDay.value;

ageAtDay.onchange = () => {
  previousSelectedAgeAtDay = ageAtDay.value;
};

ageAtYear.onchange = () => {
  const options = getDaysOptions(ageAtYear.value, ageAtMonth.value);
  populateDaysSelectElement(ageAtDay, options, previousSelectedAgeAtDay);
};

ageAtMonth.onchange = () => {
  const options = getDaysOptions(ageAtYear.value, ageAtMonth.value);
  populateDaysSelectElement(ageAtDay, options, previousSelectedAgeAtDay);
};

const yearsOfDateOfBirth = document.getElementById("years");
const monthsOfDateOfBirth = document.getElementById("months");
const weeksOfDateOfBirth = document.getElementById("weeks");
const daysOfDateOfBirth = document.getElementById("days");
const hoursOfDateOfBirth = document.getElementById("hours");
const minutesOfDateOfBirth = document.getElementById("minutes");
const secondsOfDateOfBirth = document.getElementById("seconds");
const millisecondsOfDateOfBirth = document.getElementById("milliseconds");

form.onsubmit = (event) => {
  event.preventDefault();
  const from = new Date(
    dateOfBirthYear.value,
    dateOfBirthMonth.value,
    dateOfBirthDay.value
  );

  const to = new Date(ageAtYear.value, ageAtMonth.value, ageAtDay.value);

  if (from > to) {
    alertElement.hidden = false;
    ageAlert.hidden = true;
    ageTable.hidden = true;
  } else {
    alertElement.hidden = true;

    localStorage.setItem("ageAtDay", ageAtDay.value);
    localStorage.setItem("ageAtMonth", ageAtMonth.value);
    localStorage.setItem("ageAtYear", ageAtYear.value);
    localStorage.setItem("dobDay", dateOfBirthDay.value);
    localStorage.setItem("dobMonth", dateOfBirthMonth.value);
    localStorage.setItem("dobYear", dateOfBirthYear.value);
    const dob = getDateOfBirth(from, to);

    ageAlert.innerHTML = `<h1>${dob.dob}</h1>`;

    yearsOfDateOfBirth.textContent = dob.years;
    monthsOfDateOfBirth.textContent = dob.months;
    weeksOfDateOfBirth.textContent = dob.weeks;
    daysOfDateOfBirth.textContent = dob.days;
    hoursOfDateOfBirth.textContent = dob.hours;
    minutesOfDateOfBirth.textContent = dob.minutes;
    secondsOfDateOfBirth.textContent = dob.seconds;
    millisecondsOfDateOfBirth.textContent = dob.milliseconds;
    ageAlert.hidden = false;
    ageTable.hidden = false;
  }
};
