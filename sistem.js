let inputPipka = document.querySelector(".input-pipka")
let borovImg = document.querySelector(".borov-img")
let pipkaBtn = document.querySelector(".Pipka-btn")
let pipka = "pipka"

if(inputPipka.value == pipka){
    pipkaBtn.style.display = "flex"
    inputPipka.style.background = "red"
}
else{
    inputPipka.style.border = "1px solid red"
}