document.querySelector("#backarr").addEventListener("click",funcity)

function funcity(){
    window.location.href="index.html"
}


document.querySelector("#selectCity").addEventListener("change",funselect)

function funselect(){
    var A=document.querySelector("#selectCity").value
  console.log(A)
    localStorage.setItem("CityName",A) 
    window.location.href="index.html"
}