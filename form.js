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

// Validate Email
function ValidateEmail() {
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            console.warn("Email be valid");
            emailError = true;
            email.style.backgroundColor = "#0080002b";
        }
        else {
            console.warn("Email be invalid");
            email.classList.add("is-invalid");
            email.style.backgroundColor = "rgb(157 47 44 / 29%)";
            emailError = false;
        }
    });
}

// Validate Password confirmation

function Myfunction() {
    const pass1 = document.getElementById("pass1").value;
    console.log(pass1);
    const pass2 = document.getElementById("pass2").value;
    console.log(pass2);
    if (pass1 === pass2) {
        Form1.style.left = "-450px";
        Form2.style.left = "40px";
        progress.style.width = "240px";
        Form1.Next1.disabled = false;
    }
    else if (pass1 === pass2 === "") {
        console.warn("Password must be entered");
    }
    else {
        // alert("Password Must be the same");
        console.warn("Password Must be the same");
    }
}

const git = document.getElementById("Git").value;
function isValidURL(git) {
    if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(git)) {
        console.log('YES');
    } else {
        console.warn('NO');
    }
}
const lin = document.getElementById("Lin").value;
function isValidURL(git) {
    if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(lin)) {
        console.log('YES');
    } else {
        console.warn('NO');
    }
}
const ins = document.getElementById("Ins").value;
function isValidURL(ins) {
    if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(ins)) {
        console.log('YES');
    } else {
        console.warn('NO');
    }
}

// function link1(string) 
// {
//     const git= document.getElementById("Git").value;
//         const res= git;
//         if(res = string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi))
//         {
//             console.log(res);
//             console.log(link1(res));
//             return (res !== null);
//         }
//         else{
//             console.warn("Please enter a link");
//         }

// };

// function link2(string) 
// {
//     const lin= document.getElementById("Lin").value;
//     const res= lin;

//         if(res = string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi))
//         {
//             console.log(res);
//             console.log(link1(res));
//             return (res !== null);
//         }
//         else{
//             console.warn("Please enter a link");
//         }

// };
// function link(string) 
// {
//     const ins= document.getElementById("Ins").value;
//     const res= ins;
//         if(res = string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi))
//         {
//             console.log(res);
//             console.log(link1(res));
//             return (res !== null);
//         }
//         else{
//             console.warn("Please enter a link");
//         }

// };


// function ValidateEmail()
// {
//     const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const email = document.getElementById("email").value
//     if(email==="")
//     {
//         $("#email").css({backgroundColor:""})
//     }
//     if(email.match(mailformat))
//     {
//     document.form1.email.focus();
//     email.style.background = '#FFAAAA';
//     alert("correct email")
//     return true;
//     }
//     else
//     {
//     document.form1.email.focus();
//     alert("Please enter correct email id");
//     return false;
//     }
// }   

// function checkInput(){
//         const email = document.getElementById("email").value;
//         console.log(email);

//     if(email.contains("@" && ".")){
//         email.style.backgroundColor = "green";
//     }
//     else{
//         email.style.backgroundColor = "red";
//         alert("Please enter correct email id");
//     }
// }




function Mob(number) {
    const mobile = document.getElementById("MN").value;
    if (/^\d{10}$/.test(mobile)) {
        console.log("Entered correctly");
    } else {
        console.warn("invalid input");
        return false;
    }
}

Back1.onclick = function () {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
}

Next2.onclick = function () {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";

}

Back2.onclick = function () {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "240px";

}


//     var myTextBox = document.getElementById('myTextBox');
// function checkInput() {
//   var value = myTextBox.value;
//   if (!value || isNaN(value) || parseInt(value, 10) < 700 || parseInt(value, 10) > 800) {
//     myTextBox.style.backgroundColor = 'red';
//   } else {
//     myTextBox.style.backgroundColor = 'green';
//   }
// }