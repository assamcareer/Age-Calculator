
let date = document.getElementById('date');
let calculate = document.getElementById('calculate');
let result = document.querySelector('.result');

function calculateAge() {
  let today = new Date();
  let birthDate = new Date(date.value);

  
  let years;
  if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
    years = today.getFullYear() - birthDate.getFullYear();
  }
  else {
    years = today.getFullYear() - birthDate.getFullYear() - 1;
  }

  let months;
  if (today.getDate() >= birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth();
  }
  else if (today.getDate() < birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth() - 1;
  }
  months = months < 0 ? months + 12: months;
  
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (today.getDate() >= birthDate.getDate()) {
    days = today.getDate() - birthDate.getDate();
  } else {
    days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
  }


 
  result.innerHTML += `<p class="age">You are ${years} years, ${months} months and ${days} days old.</p>`;
  
}
calculate.addEventListener('click', calculateAge);
