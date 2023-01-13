
    document.querySelector("#greendiv").addEventListener("click",funcity)

    function funcity(){
        window.location.href="picupcity.html"
    }


    var cityvalue = localStorage.getItem("cityValue") 
    if (cityvalue==="")
    {
      document.querySelector("#lactionpick").innerText = ""
    }
    else{

      document.querySelector("#lactionpick").innerText = cityvalue
      document.querySelector("#lactionpick").style.color = "green"
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

    // document.querySelector("#login").addEventListener("click" , myfunbecome)



    var city=localStorage.getItem("CityName")

    if(city.length>=1){
      var div1=document.querySelector("#greendiv")
      div1.textContent=city
      div1.style.color="black"
      div1.style.fontSize="18px"
      div1.style.paddingLeft="20px"

      var div2=document.querySelector("#calender")
      div2.setAttribute("id","calender")
      div2.style.width="467px"
      div2.style.height="50px"
      div2.style.opacity="100%"
    }
    var div3=document.querySelector("#calender")
    div3.style.fontSize="18px"
    div3.style.padding="0px"

    div3.addEventListener("click",funCalender)
    function funCalender(){
      window.location.href="calendar-start.html"

    }
    var startDatesTimes=JSON.parse(localStorage.getItem("startDateTime"))
    startDatesTimes.map(function(elem){

      document.querySelector("#sdate").innerText=elem.date
      document.querySelector("#sdate").style.color="black"
      document.querySelector("#stime").innerText=elem.time
      document.querySelector("#stime").style.color="black"

    })
    var endDatesTimes=JSON.parse(localStorage.getItem("endDateTime"))
    endDatesTimes.map(function(elem){
      document.querySelector("#edate").innerText=elem.date2
      document.querySelector("#edate").style.color="black"
      document.querySelector("#etime").innerText=elem.time2
      document.querySelector("#etime").style.color="black"
      document.querySelector("#Findcar").style.backgroundColor="green"
      document.querySelector("#Findcar").style.color="white"

      var buttoncar=document.querySelector("#Findcar").addEventListener("click",funbtn)
     
      function funbtn(){
        event.preventDefault()
      
       window.location.href="carselect.html"
      }
  
    })
    

    



    // function myfunhost () {
    //   window.location.href ="navbar.html"
    // }