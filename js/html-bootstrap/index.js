const getFormData = () => {
  const name = document.getElementById("name").value;
  document.getElementById("result").innerHTML = name;
  const pwd = document.getElementById("pwd").value;
  document.getElementById("resultpwd").innerHTML = pwd;
  const clz = document.getElementById("clz").value;
  document.getElementById("resultclz").innerHTML = clz;
  const mail = document.getElementById("mail").value;
  document.getElementById("resultemail").innerHTML = mail;
};
// const today = new Date();
// document.getElementById("clock").innerHTML=today;
const getTime = () => {
  const time = new Date();
  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const watchDay = Day[time.getDay()];
  const watchDate = time.getDate();
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "Nomember",
    "December",
  ];
  const watchMonth = Month[time.getMonth()];
  const watchYear = time.getFullYear();
  const watchHour = time.getHours();
  const watchMinute = time.getMinutes();
  const watchsec = time.getSeconds();
  const currentTime = String(watchDay).concat(
    " ",
    watchDate,
    " ",
    watchMonth,
    " ",
    watchYear,
    " ",
    watchHour,
    ":",
    watchMinute,
    ":",
    watchsec
  );

  document.getElementById("clock").innerHTML = currentTime;
};
setInterval(() => {
  getTime();
}, 1000);








 

