
        
        var carrecp=JSON.parse(localStorage.getItem("cartprice"))


        console.log("carrecp")
        carrecp.map(function(elem){

            var divouter=document.createElement("div")
            
            var divout1=document.createElement("div")
            divout1.setAttribute("id","divout1")
            var divout11=document.createElement("div")
            divout11.innerText="Trip Fare (Unlimited KMs without Fuel)"
            var divout12=document.createElement("div")
            divout12.innerText="₹"+" "+(elem.price-838)
            
            divout1.append(divout11,divout12) 

            divout2=document.createElement("div")
            divout2.setAttribute("id","hr")



            var divout3=document.createElement("div")
            divout3.setAttribute("id","divout3")
            var divout31=document.createElement("div")
            divout31.innerText="Damage Protection Fee"
            var divout32=document.createElement("div")
            divout32.innerText=("+"+" "+"₹"+" "+"838")
            

            divout4=document.createElement("div")
            divout4.setAttribute("id","hr")

            divout3.append(divout31,divout32)



            var divout5=document.createElement("div")
            divout5.setAttribute("id","divout5")
            var divout51=document.createElement("div")
            divout51.innerText="Total Fare"
            var divout52=document.createElement("div")
            divout52.innerText="₹"+" "+elem.price
            

            divout6=document.createElement("div")
            divout6.setAttribute("id","hr")

            divout5.append(divout51,divout52)



            var divout7=document.createElement("div")
            divout7.setAttribute("id","divout7")

            var divout71=document.createElement("div")
            divout71.innerText="Refundable Deposit"
            var divout711=document.createElement("div")
            divout711.innerText="Has been waived off for this booking"
            divout711.setAttribute("id","divout711")

            var div77=document.createElement("div")
                div77.append(divout71,divout711)


            var divout72=document.createElement("div")
            divout72.innerText=("+"+" "+"₹"+" "+"0")

            divout8=document.createElement("div")
            divout8.setAttribute("id","hr")

            divout7.append(div77,divout72)




            var divout9=document.createElement("div")
            divout9.setAttribute("id","divout9")
            var divout91=document.createElement("div")
            divout91.innerText="Total Fare"
            var divout92=document.createElement("div")
            divout92.innerText="₹"+" "+elem.price
            

            

            divout9.append(divout91,divout92)

            var btn=document.createElement("button")
            btn.innerText="Proceed to Pay"+" "+"₹"+" "+elem.price

            btn.addEventListener("click",funcnext)
            function funcnext(){



                
                window.location.href="selectpaymentmethod.html"
            }

            document.querySelector("#container").append(divout1,divout2,divout3,divout4,divout5,divout6,divout7,divout8,divout9,btn)
        })


