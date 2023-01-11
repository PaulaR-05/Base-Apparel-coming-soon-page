function validate() {
  let res = document.querySelector(".error");
  let validEmail = document.forms["myForm"]["femail"].value;
  const list = document.querySelector(".disable").classList;
  let result = validEmail.includes("@");
  if (validEmail == "" || result == false) {
    list.remove("disable");
    res.innerHTML = `Please enter a valid email address `;
    return false;
  }
}
