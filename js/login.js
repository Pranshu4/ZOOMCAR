

    document.querySelector(".email_green").addEventListener("click",myfun)

    function myfun(){
             window.location.href="continue_email.html"
    }


document.querySelector("#social_media").addEventListener("click",socialfun)
function socialfun(){
    window.location.href="continue_social.html"
}

document.querySelector(".left_arrow").addEventListener("click",myfun)

function myfun(){
    document.getElementById("container").style.zIndex = "0";
    document.getElementById("continue_mobile_container").style.top="40";
    document.getElementById("continue_mobile_container").style.marginTop="2000px";
}


document.querySelector(".num").addEventListener("click", function(){
    
    document.getElementById("container").style.zIndex = "-100"
    document.getElementById("continue_mobile_container").style.top="0";
    document.getElementById("continue_mobile_container").style.marginTop="20px";
})

let len = document.getElementById("mobileNumber");
len.addEventListener("keydown",handleChange)
len.addEventListener("keyup", handleChange)

function handleChange(){

    if((len.value).length === 10){
        document.getElementById("spanWarning").style.display = "none";
        document.getElementById("continue_btn").disabled = false;
        document.getElementById("continue_btn").style.backgroundColor = "#10a310";
    }else{
        document.getElementById("spanWarning").style.display = "block";
        document.getElementById("continue_btn").disabled = true;
        document.getElementById("continue_btn").style.backgroundColor = "#e0e0e0";
    }
}



document.getElementById("continue_btn").addEventListener("click", function(){

    let inputNumber = document.getElementById("mobileNumber").value;
    console.log('inputNumber:', inputNumber)

    let userNum = JSON.parse(localStorage.getItem("userIs"))?.phoneNumber || JSON.parse(localStorage.getItem("user"));
    let userNumArray = JSON.parse(localStorage.getItem("currentUser"))?.map((item)=> item.phoneNumber)
    console.log('userNumArray:', userNumArray)
    console.log('userNum:', userNum)
    console.log(userNumArray?.includes(inputNumber))

if(!userNumArray?.includes(inputNumber) && userNum !== inputNumber){

    document.getElementById("registerBox").style.marginLeft = "35vw";
    document.getElementById("registerBox").style.display = "block";
    document.getElementById("continue_mobile_container").style.backgroundColor = "black";
    document.getElementById("continue_mobile_container").style.opacity = "0.9";
    document.getElementById("continue_btn").style.display = "none";
    document.getElementById("enter_number").style.display ="none";
    
    let userNumber = document.getElementById("mobileNumber").value;
    localStorage.setItem("user",JSON.stringify(userNumber));

    let dynamicData = document.getElementById("dynamicData");

let userNumberIs = JSON.parse(localStorage.getItem("user"));
dynamicData.textContent= `The mobile number ${userNumberIs} has not been registered with us. Lets create a new account.`

}else{
    let userNumber = document.getElementById("mobileNumber").value;
    localStorage.setItem("user",JSON.stringify(userNumber));
   window.location.href = "otp1.html";
}
})


document.getElementById("registerButton").addEventListener("click", function(){
    // alert("clicked")
    window.location.href="registered_using_phone.html";
})

    
