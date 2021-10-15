let loginFrame = document.getElementById('or-login');
let head2 = document.getElementById('moveh2');
let orOp = document.getElementById('or-option');
let disOp1 = document.getElementById('disOp1');
let logInForm = document.getElementById('login-form');


let changeUI = function(){
  loginFrame.classList.remove('or-login-option1');
  loginFrame.classList.add('or-login-option2');
  head2.classList.remove('moveh1')
  head2.classList.add('moveh2');
  disOp1.style.display = "none";
  setTimeout(()=>{
    logInForm.style.display = "flex";
  },500);
}
let orignalUI = function(){
  loginFrame.classList.remove('or-login-option2');
  loginFrame.classList.add('or-login-option1');
  head2.classList.remove('moveh2');
  head2.classList.add('moveh1');
  window.setTimeout(()=>{
      disOp1.style.display = "block";
      logInForm.style.display = "none";
  },200);

}
