var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }



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

      if(name1!="")
      {
        loginsignup.innerText=name1
      }
    })

    function myfunbecome () {
      window.location.href ="login.html"
    }