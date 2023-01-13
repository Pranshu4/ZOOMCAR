
    var cart=JSON.parse(localStorage.getItem("cartcar"))

    var arrcartprice=JSON.parse(localStorage.getItem("cartprice"))

    cart.map(function(elem){
         arrcartprice=[]
       var topfirstdiv=document.createElement("div")
       topfirstdiv.setAttribute("id","outer")

       var topdivsub1=document.createElement("div")
       topdivsub1.setAttribute("id","topdivsub1")
       var topdivsub2=document.createElement("div")
       topdivsub2.setAttribute("id","topdivsub2")
        var topsub11=document.createElement("div")
        topsub11.setAttribute("id","firstdiv")
         topsub11.innerText=elem.car_name

         var topsub22=document.createElement("div")
          topsub22.innerText=elem.transmission
         
          var topsub33=document.createElement("div")
          topsub33.innerText=elem.fuel

          var divfor1122=document.createElement("div")
          divfor1122.setAttribute("id","divfor1122")
          var imgdiv=document.createElement("div")

          var thirddivimg=document.createElement("img")
          thirddivimg.src=elem.img_url
          imgdiv.append(thirddivimg)

          topdivsub2.append(imgdiv)

          divfor1122.append(topsub22,topsub33)

          topdivsub1.append(topsub11,divfor1122)

          topfirstdiv.append(topdivsub1,topdivsub2)






          var  topseconddiv=document.createElement("div")
          topseconddiv.setAttribute("id","topseconddiv")

          var topsecondsub1=document.createElement("div")
          topsecondsub1.setAttribute("id","topsecondsub1")
          var img1=document.createElement("img")
              img1.src="https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852"

              topsecondsub1.append(img1)
              
              var topsecondsub2=document.createElement("div")
              topsecondsub2.innerText="Unlimited Kms without Fuel"

              topseconddiv.append(topsecondsub1,topsecondsub2)



            var topthirddiv=document.createElement("div")
               topthirddiv.setAttribute("id","topthirddiv")
               
              var starimgdiv=document.createElement("div")
              starimgdiv.setAttribute("id","imgdiv") 
               var starimg=document.createElement("img")
                   starimg.src=elem.starurl

               var div5=document.createElement("div")
                   div5.innerText=elem.kmdriven
                  

                   starimgdiv.append(starimg)
                   topthirddiv.append(starimgdiv,div5)

                   var topfourthpara=document.createElement("p")
                   topfourthpara.setAttribute("id","topfourthpara")
                   topfourthpara.innerText="Clean and sanitized car will be delivered at the selected location"

                   var deliver=document.createElement("h3")
                   deliver.innerText="Home Delivery"

                   var deliveryandpickup=document.createElement("div")
                   deliveryandpickup.setAttribute("id","deliveryandpickup")

                   var deliverysubdiv1=document.createElement("div")
                   deliverysubdiv1.setAttribute("id","deliverysubdiv1")
                   deliverysubdiv1img=document.createElement("img")
                   deliverysubdiv1img.src="https://zoomcar-assets.zoomcar.com/images/original/199387698b88c2a9c7a4cfd0aedebd2aaae695c5.png?1608270423"
                  
                   var deliverysubdiv22=document.createElement("div")
                   deliverysubdiv22.innerText="Delivery & Pick Up At ₹119"
                   var deliverysubdiv222=document.createElement("p")
                   deliverysubdiv222.setAttribute("id"," deliverysubdiv222")
                   deliverysubdiv222.innerText="Get the car delivered & picked up from the selected location at just ₹119"
                   
                   var deliverysubdiv2=document.createElement("div")
                   deliverysubdiv2.append(deliverysubdiv22,deliverysubdiv222)
                   
                   var deliverysubdiv3=document.createElement("input")
                   deliverysubdiv3.setAttribute("type","checkbox")

                   deliverysubdiv1.append(deliverysubdiv1img)
                   deliveryandpickup.append(deliverysubdiv1,deliverysubdiv2,deliverysubdiv3)






                   var deliver1=document.createElement("h3")
                   deliver1.innerText="Add Ons"

                   var deliveryandpickup1=document.createElement("div")
                   deliveryandpickup1.setAttribute("id","deliveryandpickup1")

                   var deliverysubdiv11=document.createElement("div")
                   deliverysubdiv11.setAttribute("id","deliverysubdiv1")
                   deliverysubdiv1img1=document.createElement("img")
                   deliverysubdiv1img1.src="https://zoomcar-assets.zoomcar.com/images/original/44aaa85f73a3bbb533d0beb2cc27b8b261d82acb.png?1591953667"
                  
                   var deliverysubdiv221=document.createElement("div")
                   deliverysubdiv221.innerText="Delivery & Pick Up At ₹119"
                   var deliverysubdiv2221=document.createElement("p")
                   deliverysubdiv2221.setAttribute("id"," deliverysubdiv2221")
                   deliverysubdiv2221.innerText="Get the car delivered & picked up from the selected location at just ₹119"
                   
                   var deliverysubdiv21=document.createElement("div")
                   deliverysubdiv21.append(deliverysubdiv221,deliverysubdiv2221)
                   
                   var deliverysubdiv31=document.createElement("input")
                   deliverysubdiv31.setAttribute("type","checkbox")

                   deliverysubdiv11.append(deliverysubdiv1img1)
                   deliveryandpickup1.append(deliverysubdiv11,deliverysubdiv21,deliverysubdiv31)


                   

                   var deliver11=document.createElement("h3")
                   deliver11.innerText="Damage Protection Package"





                  var deliveryandpickup11=document.createElement("div")
                   deliveryandpickup11.setAttribute("id","deliveryandpickup11")

                   var deliverysubdiv111=document.createElement("div")
                   deliverysubdiv111.setAttribute("id","deliverysubdiv1")
                   deliverysubdiv1img11=document.createElement("img")
                   deliverysubdiv1img11.src="https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237"
                  
                   var deliverysubdiv2211=document.createElement("div")
                   deliverysubdiv2211.innerText="Standard (₹1,535)"
                   var deliverysubdiv22211=document.createElement("p")
                   deliverysubdiv22211.setAttribute("id"," deliverysubdiv2221")
                   deliverysubdiv22211.innerText="You pay up to INR 1499 in case of any damage"
                   var recomend=document.createElement("div")
                   recomend.innerText="RECOMMENDED FOR YOU"
                   recomend.setAttribute("id","recomend")
                   
                   var deliverysubdiv211=document.createElement("div")
                   deliverysubdiv211.append(deliverysubdiv2211,deliverysubdiv22211,recomend)
                   
                   var deliverysubdiv311=document.createElement("input")
                   deliverysubdiv311.setAttribute("type","checkbox")
                   deliverysubdiv311.setAttribute("id","checkbox")

                   deliverysubdiv111.append(deliverysubdiv1img11)
                   deliveryandpickup11.append(deliverysubdiv111,deliverysubdiv211,deliverysubdiv311)





                   var deliveryandpickup112=document.createElement("div")
                   deliveryandpickup112.setAttribute("id","deliveryandpickup112")

                   var deliverysubdiv1112=document.createElement("div")
                   deliverysubdiv1112.setAttribute("id","deliverysubdiv1")
                   deliverysubdiv1img112=document.createElement("img")
                   deliverysubdiv1img112.src="https://zoomcar-assets.zoomcar.com/images/original/97e7b92d185271d80fa2e7638a3eead238f9a0ed.png?1633967297"
                  
                   var deliverysubdiv22112=document.createElement("div")
                   deliverysubdiv22112.innerText="Peace of Mind (₹1,435)"
                   var deliverysubdiv222112=document.createElement("p")
                   deliverysubdiv222112.setAttribute("id"," deliverysubdiv22212")
                   deliverysubdiv222112.innerText="You pay up to INR 249 in case of any damage"
                  
                   
                   var deliverysubdiv2112=document.createElement("div")
                   deliverysubdiv2112.append(deliverysubdiv22112,deliverysubdiv222112)
                   
                   var deliverysubdiv3112=document.createElement("input")
                   deliverysubdiv3112.setAttribute("type","checkbox")
                   deliverysubdiv3112.setAttribute("id","checkbox")

                   deliverysubdiv1112.append(deliverysubdiv1img112)
                   deliveryandpickup112.append(deliverysubdiv1112,deliverysubdiv2112,deliverysubdiv3112)
                   


                    var b=document.createElement("h5")
                    b.setAttribute("id","b")
                    b.innerText="How Damage Protection Works?"
                    var c=document.createElement("p")
                    c.innerText="Incase of accidents or any damage to the car, Zoomcar will take care of the expenses. You pay the minimum amount as per the package and we take care of the rest. Higher the package you select, lower the risk at your end for any damage. Please note that this is applicable solely in the case of damage to the vehicle and does not cover for any other third party loss."




                    var keepinmind=document.createElement("h3")
                    keepinmind.innerText="Keep in Mind"

                    var diva=document.createElement("div")
                    diva.setAttribute("id","diva")
                    
                    var diva1=document.createElement("div")
                    diva1.setAttribute("id","divimg2")

                    var diva1img=document.createElement("img")
                    diva1img.src="https://zoomcar-assets.zoomcar.com/images/original/0ebf53a526da3baa9621436223d17ee0a712495e.png?1584454768"
                    
                    var diva2=document.createElement("div")
                    diva2.innerText="Driving License Mandatory"

                    diva1.append(diva1img)
                    diva.append(diva1,diva2)





                    var divb=document.createElement("div")
                    divb.setAttribute("id","divb")
                    
                    var divb1=document.createElement("div")
                    divb1.setAttribute("id","divimgb")

                    var divb1img=document.createElement("img")
                    divb1img.src="https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852"
                    
                    var divb2=document.createElement("div")

                    var divb2a=document.createElement("div")
                    divb2a.innerText="Fare & Fuel Policy"
                    var divb2b=document.createElement("p")
                    divb2b.innerText="Fare is inclusive of all taxes. Kindly return the car at the same fuel level as the trip start time"
                    divb2c=document.createElement("a")
                    divb2c.setAttribute("id","anchor")
                    divb2c.innerText="See Details"

                    divb2.append(divb2a,divb2b,divb2c)
                    divb1.append(divb1img)
                    divb.append(divb1,divb2)






                    var divc=document.createElement("div")
                    divc.setAttribute("id","divc")
                    
                    var divc1=document.createElement("div")
                    divc1.setAttribute("id","divimgc")

                    var divc1img=document.createElement("img")
                    divc1img.src="https://zoomcar-assets.zoomcar.com/images/original/afb10552c79c652619a45d814ab9f936f8592037.png?1584454817"
                    
                    var divc2=document.createElement("div")

                    var divc2a=document.createElement("div")
                    divc2a.innerText="Cancellation Policy"
                    var divc2b=document.createElement("p")
                    divc2b.innerText="Hassle free cancellations and refunds at nominal charges"
                    divc2c=document.createElement("a")
                    divc2c.setAttribute("id","anchorr")
                    divc2c.innerText="See Details"

                    
                    divc2.append(divc2a,divc2b,divc2c)
                    divc1.append(divc1img)
                    divc.append(divc1,divc2)







                    var divd=document.createElement("div")
                    divd.setAttribute("id","divd")
                    
                    var divd1=document.createElement("div")
                    divd1.setAttribute("id","divimgd")

                    var divd1img=document.createElement("img")
                    divd1img.src="https://zoomcar-assets.zoomcar.com/images/original/9f2143a815aa6de62a72bcc66fa2739162e52fdc.png?1638375860"
                    
                    var divd2=document.createElement("div")

                    var divd2a=document.createElement("div")
                    divd2a.innerText="Agreement Policy"
                    var divd2b=document.createElement("p")
                    divd2b.innerText="I hereby agree to the terms and conditions of the Lease Agreement with Host"
                    divd2c=document.createElement("a")
                    divd2c.setAttribute("id","anchor")
                    divd2c.innerText="See Details"

                    
                    var divd3=document.createElement("input")
                    divd3.setAttribute("type","checkbox")
                    divd3.setAttribute("id","divd3checkbox")

                    divd2.append(divd2a,divd2b,divd2c)
                    divd1.append(divd1img)
                    divd.append(divd1,divd2,divd3)





                  var divdown=document.createElement("div")
                  divdown.setAttribute("id","divdown")
                  
                  var divdown1=document.createElement("div")
                  divdown1.setAttribute("id","divdown1")

                  var divdown2=document.createElement("button")
                  divdown2.innerText="CHECKOUT SUMMARY"

                  
                    

                  var divdown11=document.createElement("div")
                  divdown11.innerText="₹"+" "+elem.price
                  


                  var divdown12=document.createElement("div")
                  divdown12.innerText="Apply Coupon"
                  

                  divdown1.append(divdown11,divdown12)

                  divdown.append(divdown1,divdown2)



                   
                    
                       

                    divdown2.addEventListener("click",function(){
                        popfunc(elem)
                    })
                  
                

                  






          document.querySelector("#container").append(topfirstdiv,topseconddiv,topthirddiv,topfourthpara,deliver,deliveryandpickup,deliver1,deliveryandpickup1,deliver11,deliveryandpickup11,deliveryandpickup112,b,c,keepinmind,diva,divb,divc,divd,divdown)

    })
       
                       
                    function popfunc(elem){
                        var pop=document.querySelector(".popdiv")
                    var B=document.querySelector("#container")
                    B.style.opacity="30%"
                    pop.classList.add("open-popup")
                     arrcartprice.push(elem)
                     localStorage.setItem("cartprice",JSON.stringify(arrcartprice))
                   }

                   var closepop=document.querySelector("#cross").addEventListener("click",funclosepop)

                   function funclosepop(){
                    var pop=document.querySelector(".popdiv")
                    var B=document.querySelector("#container")
                    B.style.opacity="100%"
                    pop.classList.remove("open-popup")
                   }

                   var popselfpick=document.querySelector("#popdivspa").addEventListener("click",funself)

                   function funself(){
                      window.location.href="carrecipt.html"
                   }

         
