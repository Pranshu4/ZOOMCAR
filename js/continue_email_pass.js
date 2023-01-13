

    let inputBox = document.getElementById("userPassword");
    inputBox.addEventListener("keydown", handleInput);
    inputBox.addEventListener("keyup", handleInput);

    function handleInput(){
        inputBox = document.getElementById("userPassword")
        if(inputBox.value.length >= 6){
            document.getElementById("continue_btn").style.backgroundColor= "#10a310";
        }
        else{
            document.getElementById("continue_btn").style.backgroundColor= "#e0e0e0";
        }
    }

    document.getElementById("continue_btn").addEventListener("click", function(){
        let userPassword = document.getElementById("userPassword").value;
        let userNum = JSON.parse(localStorage.getItem("user"));
        let userData = JSON.parse(localStorage.getItem("currentUser"));

        userData.forEach(element => {
            if(element.phoneNumber == userNum){
                if(element.password == userPassword){
                    window.location.href = "index.html";
                }
                else{
                    alert("wrong password")
                }
            }
        });


    })
