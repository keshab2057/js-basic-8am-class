const sayHello = () => {
  const name = document.getElementById("name").value;
  const gender = document.getElementsByName("gender")[0].checked?document.getElementsByName("gender")[0].value:document.getElementsByName("gender")[1].value;
  const college = document.getElementById("colleges").value; 
  const image =document.getElementsByName("image")[0].value;
  const date = document.getElementById("birthday").value;
  alert(`hello ${name} ${gender} ${college} ${image} ${date}`);
};

