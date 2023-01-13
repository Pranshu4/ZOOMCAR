


    var priceupi=JSON.parse(localStorage.getItem("cartcar"))
    priceupi.map(function(elem){
        var pri=document.createElement("div")
        pri.innerText="Amount : "+"₹"+" "+elem.price

        document.querySelector("#receiptrs").append(pri)

      
      var btnlower=document.createElement("button")
      btnlower.setAttribute("id","btnlower")
      btnlower.innerText="PAY INR "+elem.price
      document.querySelector("#lowerbtn").append(btnlower)
    })





    document.querySelector("#credit").addEventListener("click",funcredit)

    function funcredit(){
        console.log("ewewef")
        document.querySelector(".popupcard").classList.add("open-popup")
        var B=document.querySelector("#container")
            B.style.opacity="30%" }
   


    var closepop=document.querySelector("#cross").addEventListener("click",funclosepop)

    function funclosepop(){
        document.querySelector(".popupcard").classList.remove("open-popup")
        var B=document.querySelector("#container")
            B.style.opacity="100%"}
                   
     var inputBox=document.querySelector("#inputcard")
     var inputBox1=document.querySelector("#ipdate")
     var inputBox2=document.querySelector("#ipcvv")
    inputBox.addEventListener("keydown", handleInput);
    inputBox.addEventListener("keyup", handleInput);

    inputBox1.addEventListener("keydown", handleInput);
    inputBox1.addEventListener("keyup", handleInput);

    inputBox2.addEventListener("keydown", handleInput);
    inputBox2.addEventListener("keyup", handleInput);

    function handleInput(){
         var inputcardd=document.querySelector("#inputcard").value
         var ipdate=document.getElementById("ipdate").value
         var ipcvv=document.getElementById("ipcvv").value

         if(inputcardd.length==16 && ipdate.length>=5 && ipcvv.length>=3)
         {
             var Aa=document.getElementById("btnlower")
             Aa.style.backgroundColor="green"
             document.querySelector("#lowerbtn").addEventListener("click",funbtn)
             function funbtn(){
                 window.location.href="otp.html"
             }
         }
         else{
            document.getElementById("btnlower").style.backgroundColor= "#e0e0e0";
        }
    }
                   
