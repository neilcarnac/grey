    //forms
    var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");
    var Form3 = document.getElementById("Form3");

    //buttons
    var Next1 = document.getElementById("Next1");
    var Next2 = document.getElementById("Next2");
    var Back1 = document.getElementById("Back1");
    var Back2 = document.getElementById("Back2");


    //form1
    var email = document.getElementById("email").value;
    console.log(email);


    var email = document.getElementById("email");
    console.log(email);
    
    function Myfunction(){
        const pass1 = document.getElementById("pass1").value;
        console.log(pass1);
        const pass2 = document.getElementById("pass2").value;
        console.log(pass2);
        if(pass1===pass2)
        {
            Form1.style.left = "-450px";
            Form2.style.left = "40px";
            progress.style.width = "240px"; 
        }
        else{
            alert("Password Must be the same");
            console.warn("Password Must be the same");
        }

    }

    Back1.onclick = function(){
        Form1.style.left = "40px";
        Form2.style.left = "450px";
        progress.style.width = "120px";
    }

    Next2.onclick = function(){
        Form2.style.left = "-450px";
        Form3.style.left = "40px";
        progress.style.width = "360px";

    }

    Back2.onclick = function(){
        Form2.style.left = "40px";
        Form3.style.left = "450px";
        progress.style.width = "240px";

    }