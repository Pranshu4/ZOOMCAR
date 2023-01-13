
    document.querySelector("#arrow").addEventListener("click",funarrback)
    function funarrback(){
        window.location.href="index.html"
    }

    var confirm=JSON.parse(localStorage.getItem("cartcar"))

    confirm.map(function (elem){
        var carimgdiv=document.createElement("div")
        carimgdiv.setAttribute("id","carimgdiv")
        var carimg=document.createElement("img")
        carimg.src=elem.img_url   
        
        var cardiv2=document.createElement("div")
        cardiv2.setAttribute("id","cardiv2")
        var carname=document.createElement("h2")
        carname.innerText=elem.car_name

        var carlocation=document.createElement("h2")
        carlocation.setAttribute("id","carlocation")
        carlocation.innerText=elem.car_location


        var cardiv3=document.createElement("div")
        cardiv3.setAttribute("id","cardiv3")

        var suba=document.createElement("div")
        var suba1=document.createElement("div")
        var suba2=document.createElement("div")
        

        

        suba.append(suba1,suba2)
        
        var subc=document.createElement("div")
        
        subc.setAttribute("id","subc")
        var subcimg=document.createElement("img")
        subcimg.src="https://banner2.kisspng.com/20180418/kgq/kisspng-arrow-emoji-computer-icons-right-arrow-5ad6ec2b482ce6.4738946215240346032956.jpg"
        
        subc.append(subcimg)
        var subb=document.createElement("div")
        var subb1=document.createElement("div")
        var subb2=document.createElement("div")

        var startDatesTimes=JSON.parse(localStorage.getItem("startDateTime"))
        startDatesTimes.map(function(elem){

            suba1.innerText=elem.date
            suba2.innerText=elem.time
        

        })
        var endDatesTimes=JSON.parse(localStorage.getItem("endDateTime"))
        endDatesTimes.map(function(elem){
            subb1.innerText=elem.date2
            subb2.innerText=elem.time2
        })


        subb.append(subb1,subb2)
        suba.style.border="none"
        subb.style.border="none"
        cardiv3.append(suba,subc,subb)
        
        cardiv2.append(carname,carlocation,cardiv3)
        carimgdiv.append(carimg)
        document.querySelector("#maindiv").append(carimgdiv,cardiv2)
    })


    var priceconf=JSON.parse(localStorage.getItem("cartcar"))

priceconf.map(function(elem){
    var pri=document.createElement("div")
    pri.innerText=" ₹"+" "+elem.price

    document.querySelector("#cost").append(pri)
})
priceconf.map(function(elem){
    var pri=document.createElement("div")
    pri.innerText=" ₹"+" "+elem.price

    document.querySelector("#cost1").append(pri)
})

   document.querySelector("#bt").addEventListener("click",funcbtn)
 
 function funcbtn(){
     window.location.href="index.html"
 }
