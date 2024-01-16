const getFormData =()=>{
    const name = document.getElementById("name").value;
    document.getElementById("result").innerHTML=name;
}
const today = new Date();
// document.getElementById("clock").innerHTML=today;
const getTime = () => {  
const time = new Date();
  const watchHour = time.getHours();
  const watchMinute = time.getMinutes();
  const watchsec = time.getSeconds();
 const currentTime = String(watchHour).concat(":",watchMinute,":",watchsec)
 document.getElementById("clock").innerHTML=currentTime;
};
setInterval(()=>{
  getTime();
},1000);
