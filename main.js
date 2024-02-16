const changeTime = () => {
  currentDate = new Date();
  let hour = currentDate.getHours(); // gets current hour
  let minute = currentDate.getMinutes(); // gets current minute
  let second = currentDate.getSeconds(); // gets current second
  let period = "AM"; // setting the period to AM

  if (hour == 0) {
    // this is because the above functions returns the hours in 0-23 hrs format
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    period = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  //   let time = `${hour} ${minute}  ${second}`;
  let showHour = document.querySelector("#hour");
  let showMinute = document.querySelector("#minute");
  let showSecond = document.querySelector("#second");

  setTimeout(changeTime, 1000);

  showHour.innerHTML = hour;
  showMinute.innerHTML = `${minute}`;
  showSecond.innerHTML = `${second}    ${period}`;
  document.getElementById("hour").innerHTML = time;
};

changeTime();
