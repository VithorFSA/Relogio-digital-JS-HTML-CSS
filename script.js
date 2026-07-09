let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


setInterval(() => {  

  let data = new Date();

hrs.innerHTML = (data.getHours() < 10 ? '0':'') + data.getHours();
min.innerHTML = (data.getMinutes() < 10 ? '0':'') + data.getMinutes();
sec.innerHTML = (data.getSeconds() < 10 ? '0':'') + data.getSeconds();

},1000)