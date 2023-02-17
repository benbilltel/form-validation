const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordAgain = document.getElementById("password-2");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const isValidEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordAgainValue = passwordAgain.value.trim();

  if (usernameValue == "") {
    setError(username, "Username is required!");
  } else if (usernameValue.length < 6) {
    setError(username, "Username must be at least 6 character!");
  } else {
    setSuccess(username);
  }
  if (emailValue == ''){
    setError(email, "Email is required!");
  }else if(!isValidEmail(emailValue)){
    setError(email,'Provide a valid email!')
  }else{
    setSuccess(email);
  }
  if(passwordValue==''){
    setError(password, "Password is required!");
  }else if(password.length < 8){
    setError(password, "Password must be at least 8 character!");
  }else{
    setSuccess(password);
  }
  if(passwordValue!=passwordAgainValue){
    setError(passwordAgain, "Password doesn't match");
  }else if(passwordAgainValue == ''){
    setError(passwordAgain, 'Please confirm your password');
  }else{
    setSuccess(passwordAgain);
  }
};
