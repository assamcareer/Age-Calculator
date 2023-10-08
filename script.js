
const btnElem = document.querySelector(".HTMLbuttonElement");



function calculateDOB() {
  const UserDOB = document.querySelector("#birthdate").value;
  // console.log(UserDOB);
  if (UserDOB === "") {
    alert("Please Enter the DOB !!!");
  }
  else {
    const resultAGE = calcuateResult(UserDOB);
    const ShowOutput = document.querySelector("#result");
    ShowOutput.textContent = resultAGE;
  }
}

function calcuateResult(UserDOB) {
  const currentDate = new Date();
  const userBirthDate = new Date(UserDOB);
  let age = currentDate.getFullYear() - userBirthDate.getFullYear();
  if (age < 0) {
    return "You are not Born 😑";
  }

  if (userBirthDate.getMonth() > currentDate.getMonth()) {
    age--;
  }
  else if (currentDate.getMonth() === userBirthDate.getMonth()) {
    if (currentDate.getDate() > userBirthDate.getDate()) {
      if (age > 0)
        age--;
      else
        return "You are not Born 😑";
    }
    else if (currentDate.getDate() === userBirthDate.getDate()) {
      return "Happy birthday to you 🎉 you are " + age + " year old";
    }

  }
  return "your age is " + age;
}


btnElem.addEventListener("click", calculateDOB);
