const regBack=()=>{
    window.location.href = "../index.html"
}
const profileback=()=>{
    window.location.href = "../Register/register.html"
}
const completeprofile=()=>{
    window.location.href = "../Profile/profile.html"
}

const register =()=>{
    window.location.href = "../Register/register.html"
}


let password = document.getElementById("password")
let showimg = document.getElementById("showimg")
const show=()=>{
    if(password.type==="password"){
        password.type = "text";
        showimg.innerHTML = "Hide";
    }else{
        password.type = "password";
        showimg.innerHTML = "Show";
    }
}

// let show = document.getElementById("show")
// let password = document.getElementById("password")
// show.onclick=function(){
//     if(password.type==="password"){
//               password.type = "text"
//               show.src = `../Images/hide.png`;
//            }else{
//             password.type = "password"
//             show.src = "../Images/show.png";
//         }
// }


const regAccount = () =>{
    window.location.href = "../Profile/profile.html"
}

// const form = document.querySelector('form');
// const error = document.querySelector('.error');
// const input = document.querySelector('input');

// form.addEventListener('submit', event => {
//   form.checkValidity();
  
//   // Stop the form submission so we don't leave CodePen!
//   event.preventDefault();
// });

// // Revalidate on each keypress once the field has changed 
// input.addEventListener('input', event => {
//   // Clear out any previous error.
//   error.textContent = '';
  
//   // Trigger the validation check. If the input field is invalid, it will emit an
//   // 'invalid' event.
//   input.checkValidity();
// });

// input.addEventListener('invalid', event => {
//   // Even with the novalidate attribute the form still
//   // gives us a suitable error message; we just have to display it
//   // ourselves.
//   error.textContent = input.validationMessage;
//   input.focus();
// });


const save = ()=>{
    window.location.href = "../Profile/completeprofile.html"
}
// const circle = document.getElementById("circle")
// const bvn = document.getElementById("bvn")
// const form = document.getElementById("bvn")
// console.log(bvn);
// bvn.addEventListener('change', (e)=>{
//     const target = e.target;
//     console.log(target);
//     if(bvn.length===10){
//         circle.src = "../Images/unverified.png"
//     }else{
//         circle.src = "../Images/circle check full (2).png" 
//     }
// })

const input = document.querySelector("input")
const log = document.getElementById("log")
input.addEventListener("change", updatevalue)
function updatevalue(e){
    if(input.length===2){
        log.textContent = e.target.value
        // console.log(e.target.value);
    }else{
        console.log("error");
    }
   
}
