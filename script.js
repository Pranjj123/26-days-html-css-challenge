const passwordInput =
document.getElementById("password");

const toggleButton =
document.getElementById("togglePAassword");

toggleButton.addEventListener(
    "click",
    function(){

        if(passwordInput.type === "password"){

            passwordInput.type = "text";

        }else{

            passwordInput.type = "password";
        }
    }
);