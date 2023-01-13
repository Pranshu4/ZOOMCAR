

sendOtp();
let otp;
    function sendOtp(){
        setTimeout(()=>{
            otp = Math.floor(Math.random() * 900000) + 99999;
            alert(otp);
        },3000)
    }

    let otpBox = document.getElementById("otpBox");
    otpBox.addEventListener("keydown",changeBtn);
    otpBox.addEventListener("keyup", changeBtn);
     function changeBtn(){
      let otpIs = document.getElementById("otpBox").value;
      if(otpIs.length === 6){
          document.getElementById("continue_btn").style.backgroundColor = "#10a310"
      }
     }

     document.getElementById("continue_btn").addEventListener("click",function(){

        let enteredOtp = document.getElementById("otpBox").value;
         if(otp == enteredOtp){
            document.getElementById("errorMsg").textContent = "";
            window.location.href="index.html"
         }else{
            document.getElementById("errorMsg").textContent = "Invalid OTP";
         }
     })


     let user = JSON.parse(localStorage.getItem("user"))
     document.getElementById("phoneNumber").textContent = `+91${user}`;

