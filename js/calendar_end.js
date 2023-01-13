document.querySelector("button").addEventListener("click",myfun2)
    function myfun2(){
        
        var datesTimes2=[]
        var dates2=document.querySelector("#date2").value
        var times2=document.querySelector("#time2").value
        var dateTime2={
            date2:dates2,
            time2:times2,
        }
        datesTimes2.push(dateTime2)
        localStorage.setItem("endDateTime",JSON.stringify(datesTimes2))
       
        var dates2=document.querySelector("#date2").value
        var times2=document.querySelector("#time2").value
        var da2=document.createElement("p")
        var ti2=document.createElement("p")
        da2.innerText=dates2
        ti2.innerText=times2
        document.querySelector("#box2").append(da2,ti2)
    }
    

     var startDatesTimes=JSON.parse(localStorage.getItem("startDateTime"))
    startDatesTimes.map(function(elem){
        var da=document.createElement("p")
        var ti=document.createElement("p")
        da.innerText=elem.date
        ti.innerText=elem.time
        document.querySelector("#box1").append(da,ti)

    })
    var endDatesTimes=JSON.parse(localStorage.getItem("endDateTime"))
    endDatesTimes.map(function(elem){
        var da=document.createElement("p")
        var ti=document.createElement("p")
        da.innerText=elem.date2
        ti.innerText=elem.time2
        document.querySelector("#box2").append(da,ti)

    })


    document.querySelector("#backarr").addEventListener("click",funcity)

    function funcity(){
        window.location.href="index.html"
    }