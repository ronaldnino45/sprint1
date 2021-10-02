console.log
var aspectoBtn = document.getElementById("aspecto");
var mainElement = document.getElementById("container");

aspectoBtn.addEventListener("click",function()){
    mainElement.classList.toggle("dark");
});

