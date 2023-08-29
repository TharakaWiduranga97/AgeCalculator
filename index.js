let birthdayEl = document.getElementById("birthday");
let paraEl = document.getElementById("result");

function calculateAge() {
  let birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    alert("please Enter your date of birthday");
  } else {
    let age = getAge(birthdayValue);

    function getAge(birthdayValue) {
      const currentDate = new Date();
      const birthdayDay = new Date(birthdayValue);

      let currentYear = currentDate.getFullYear();
      let birthYear = birthdayDay.getFullYear();
      let birthDday = birthdayDay.getDate();

      let age = currentYear - birthYear;
      let month = currentDate.getMonth() - birthdayDay.getMonth();
      let days = currentDate.getDate() - birthDday;

      if (month < 0) {
        age = age - 1;
        month = month + 12;

        if (days > 0) {
          paraEl.innerText = `your age is ${age} ${
            age > 1 ? "years" : "year"
          } & ${month} ${month > 1 ? "Months" : "month"} & ${days} ${
            days > 1 ? "days" : "day"
          } old `;
        } else {
          let month1 = month - 1;
          let day2 = findDays(days);
          paraEl.innerText = `your age is ${age} ${
            age > 1 ? "years" : "year"
          } & ${month1} ${month1 > 1 ? "Months" : "month"} & ${day2} ${
            day2 > 1 ? "days" : "day"
          } old `;
        }
      } else {
        if (days > 0) {
          paraEl.innerText = `your age is ${age} ${
            age > 1 ? "years" : "year"
          } & ${month} ${month > 1 ? "Months" : "month"} & ${days} ${
            days > 1 ? "days" : "day"
          } old `;
        } else {
          let month1 = month - 1;
          let day2 = findDays(days);
          paraEl.innerText = `your age is ${age} ${
            age > 1 ? "years" : "year"
          } & ${month1} ${month1 > 1 ? "Months" : "month"} & ${day2} ${
            day2 > 1 ? "days" : "day"
          } old `;
        }
      }
    }
  }

  // function getAge(birthdayValue){
  //   const currentDate = new Date();

  //   const currentYear = currentDate.getFullYear();
  //   const birthYear = birthdayValue.getFullYear();

  //   const age = currentYear -birthYear;

  //   console.log(age);

  function findDays(val) {
    let day1;
    let day2 = new Date().getMonth() + 1;

    switch (day2) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day1 = 31 + val;

        break;
      case 2:
        day1 = 28 + val;

        break;
      case 4:
      case 6:
      case 9:
      case 11:
        day1 = 30 + val;

        break;
    }

    console.log(val);
    console.log(day2);
    return day1;
  }
}
