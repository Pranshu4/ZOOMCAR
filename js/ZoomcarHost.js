
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
   
    evt.currentTarget.className += " active";
    
  }
  document.getElementById("defaultOpen").click();



  var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    document.querySelector("#img").addEventListener("click" , myfunhome) 

    function myfunhome() {
      window.location.href = "index.html"
    }

    var cityvalue = localStorage.getItem("cityValue") 
    document.querySelector("#lactionpick").innerText = cityvalue
    document.querySelector("#lactionpick").style.color = "green"

    document.querySelector("#loginn").addEventListener("click" , myfunbecome)

    var namelogin=JSON.parse(localStorage.getItem("currentUser"))

    namelogin.map(function (elem){
      var name1=elem.name

      var loginsignup=document.querySelector("#loginn")
      var sidebarname=document.querySelector("#loginnn")
      if(name1!="")
      {
        loginsignup.innerText=name1
        sidebarname.innerText=name1

      }
    })

    function myfunbecome () {
      window.location.href ="login.html"
    }