document.querySelector("button").addEventListener("click",myfun)
    
    function myfun(){
        var datesTimes=[]
        var dates=document.querySelector("#date").value
        var times=document.querySelector("#time").value
        var dateTime={
            date:dates,
            time:times,
        }
        datesTimes.push(dateTime)
        localStorage.setItem("startDateTime",JSON.stringify(datesTimes))
        var da=document.createElement("p")
        var ti=document.createElement("p")
        da.innerText=dates
        ti.innerText=times
        document.querySelector("#box1").append(da,ti)
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