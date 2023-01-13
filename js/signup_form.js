
let userName = document.getElementById("username");
    let userPassword = document.getElementById("userpassword");

    userName.addEventListener("keydown", handleChange);
    userName.addEventListener("keyup", handleChange);
    userPassword.addEventListener("keydown", handleChange);
    userPassword.addEventListener("keyup", handleChange);

    function handleChange(){
        if(userName.value.length > 5 && userPassword.value.length >= 6){
            document.getElementById("continue_button").style.backgroundColor = "#10a310";
            document.getElementById("continue_button").disabled = false;
        }else{
            document.getElementById("continue_button").style.backgroundColor = "#e0e0e0";
            document.getElementById("continue_button").disabled = true;
        }
    }

    document.getElementById("continue_button").addEventListener("click", function(){
        let userName = document.getElementById("username").value;
    let userPassword = document.getElementById("userpassword").value;

    let prevData = JSON.parse(localStorage.getItem("userIs"));

    let prevUser = JSON.parse(localStorage.getItem("currentUser")) || [];

    let userData = {
        name: userName,
        password: userPassword,
        phoneNumber: prevData?.phoneNumber,
        email: prevData?.email
    }

    prevUser.push(userData)
    localStorage.setItem("currentUser",JSON.stringify(prevUser));
    localStorage.removeItem("userIs");


    window.location.href = "signUpOtp.html";
    })

    document.querySelector("#SS").addEventListener("click",funSS)

    function funSS(){
        window.location.href="registered_using_phone.html"
    }

    
