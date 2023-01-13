document.querySelector("#option1").addEventListener("click",myFun1)
    
function myFun1(){
    CVS=document.querySelector("#option1")
    CVS.style.backgroundColor="green"
    CVS.style.color="white";
    YMS=document.querySelector("#option2")
    YMS.style.backgroundColor="white"
    YMS.style.color="black";
    
    document.querySelector(".optedOne>p").innerHTML="All-in-one solution to reduce operating costs over 30% via advanced vehicle <br> monitoring and management systems"
    var slImg1=document.querySelector("#slideImage1")
    var slImg2=document.querySelector("#slideImage2")
    var slImg3=document.querySelector("#slideImage3")
    slImg1.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_A.06f7fa208212fb4dc92e611fdf69304e.jpg"
    slImg2.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_C.c9d9a766c44e0796bce6e3bdcc65d589.jpg"
    slImg3.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_E.43c8d28a91111b0eb44831b1d040bc79.jpg"
    
    document.querySelector("#features1>h4").textContent="Vehicle Tracking & Safety"
    document.querySelector("#features2>h4").textContent="Fuel Management"
    document.querySelector("#features3>h4").textContent="Driver Score"
    document.querySelector("#features4>h4").textContent="Operations Automation"
    document.querySelector("#features5>h4").textContent="Vehicle Health Monitoring"

    document.querySelector("#features1>p").textContent="Geo-fencing, Real time alerts, immobilization to manage 24x7"
    document.querySelector("#features2>p").textContent="Real time fuel level monitoring and fuel theft detection mechanisms"
    document.querySelector("#features3>p").textContent="Improved fuel efficiency and cost benefits from better driving behavior"
    document.querySelector("#features4>p").textContent="Automate routine operational tasks and increase uptime over 25%"
    document.querySelector("#features5>p").textContent="Real-time Asset health monitoring systems for reduced downtime"

    
}
document.querySelector("#option2").addEventListener("click",myFun2)

function myFun2(){
    YMS=document.querySelector("#option2")
    YMS.style.backgroundColor="green"
    YMS.style.color="white";
    CVS=document.querySelector("#option1")
    CVS.style.backgroundColor="white"
    CVS.style.color="black";
    document.querySelector(".optedOne>p").innerHTML="Suite of connected technologies offering fleet agnostic solutions aimed at driving <br> higher revenue through better yield management and dual fleet utilisation to <br> expand customer base"
    var slImg1=document.querySelector("#slideImage1")
    var slImg2=document.querySelector("#slideImage2")
    var slImg3=document.querySelector("#slideImage3")
    slImg1.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_F.c6cae2c0c2d78e980c507982bab4c1b9.jpg"
    slImg2.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_D.c564a1d96dd9b4b03806837bbc51ca52.jpg"
    slImg3.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_B.a4d19a95cb4faa68b9c0cdd1bf6e703e.jpg"
    document.querySelector("#features1>h4").textContent="Renter Platform"
    document.querySelector("#features2>h4").textContent="Subscription Platform"
    document.querySelector("#features3>h4").textContent="Dynamic Pricing"
    document.querySelector("#features4>h4").textContent="Analytics & Reporting"
    document.querySelector("#features5>h4").textContent="Real-Time Monitoring"

    document.querySelector("#features1>p").textContent="Customisable stack to launch station based & free-floating keyless renter services"
    document.querySelector("#features2>p").textContent="Whitelabel Subscription platform that works across all vehicle types for higher utilization"
    document.querySelector("#features3>p").textContent="Plug and play module matching demand-supply and maximizing ROI"
    document.querySelector("#features4>p").textContent="Empower decision making through advanced Data Science and Analytics capabilities"
    document.querySelector("#features5>p").textContent="Connectivity and Real-time monitoring features to bring more transparency and reliability"
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}