
     document.querySelector(".left_arrow").addEventListener("click",myfun)

function myfun(){
    window.location.href="continue_mobile.html"
}

let len = document.getElementById("email");
len.addEventListener("keydown",handleInput)
len.addEventListener("keyup",handleInput)

function handleInput(){
    let inputEmail = document.getElementById("email").value;
    let newinputEmail = inputEmail.substring(0, inputEmail.length-2);
    console.log('newinputEmail:', newinputEmail)

    if(newinputEmail.split("").includes("@")){
        console.log("here i am", newinputEmail)
        if(newinputEmail.split("").includes(".")){
            document.getElementById("continue_btn").style.backgroundColor = "#10a310"
        }
    }
}

let userNum = JSON.parse(localStorage.getItem("userIs"))?.number || JSON.parse(localStorage.getItem("user"))
document.getElementById("demoPhoneNumber").textContent = userNum;

document.getElementById("continue_btn").addEventListener("click",function(){

    let userEmailArray = JSON.parse(localStorage.getItem("currentUser"))?.map((item)=> item.email)
    let emailIs = document.getElementById("email").value;

    if(userEmailArray?.includes(emailIs)){
        alert("user already exists")
    }else{
        let userNum = JSON.parse(localStorage.getItem("user"));
        let userData = {
            phoneNumber: userNum,
            email: emailIs
        }

        localStorage.setItem("userIs",JSON.stringify(userData))

        window.location.href = "signup_form.html";
    }
})

