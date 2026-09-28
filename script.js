var form = document.getElementById("regForm");

function setError(id, message) {
  document.getElementById(id + "Error").textContent = message;
}

function validate() {
  var firstName = document.getElementById("firstName").value.trim();
  var lastName  = document.getElementById("lastName").value.trim();
  var email     = document.getElementById("email").value.trim();
  var userId    = document.getElementById("userId").value.trim();
  var password  = document.getElementById("password").value;
  var confirmPw = document.getElementById("confirmPassword").value;

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var valid = true;

  if (firstName === "") {
    setError("firstName", "First name is required.");
    valid = false;
  } else {
    setError("firstName", "");
  }

  if(lastname)
 
}
