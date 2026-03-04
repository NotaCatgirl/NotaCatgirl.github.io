document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#username").addEventListener("change", checkUsername);
document
  .querySelector("#signupForm")
  .addEventListener("submit", function (event) {
    validateForm(event);
  });

async function displayCity() {
  let zip = document.querySelector("#zip").value;
  let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zip}`;
  let response = await fetch(url);
  let data = await response.json();
  // console.log(data);
  document.querySelector("#city").innerHTML = data.city;
  document.querySelector("#latitude").innerHTML = data.latitude;
  document.querySelector("#longitude").innerHTML = data.longitude;
}

async function displayCounties() {
  let state = document.querySelector("#state").value;
  let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
  let response = await fetch(url);
  let data = await response.json();
  let countyList = document.querySelector("#county");
  countyList.innerHTML = "<option>Select County</option>";
  for (let i = 0; i < data.length; i++) {
    countyList.innerHTML += `<option>${data[i]}</option>`;
  }
}

async function checkUsername() {
  let username = document.querySelector("#username").value;
  let url = `https://csumb.space/api/usernameCheckAPI.php?username=${username}`;
  let response = await fetch(url);
  let data = await response.json();
  if (data.available) {
    document.querySelector("#usernameError").innerHTML = "Username available!";
    document.querySelector("#usernameError").style.color = "green";
  } else {
    document.querySelector("#usernameError").innerHTML = "Username taken.";
    document.querySelector("#usernameError").style.color = "red";
  }
}

function validateForm(e) {
  let isValid = true;
  let username = document.querySelector("#username").value;
  document.querySelector("#usernameError").innerHTML = "";
  document.querySelector("#passwordError").innerHTML = "";
  if (username.length == 0) {
    document.querySelector("#usernameError").innerHTML = "Username Required!";
    isValid = false;
  } else if (username.length < 6) {
    document.querySelector("#usernameError").innerHTML =
      "Username must be at least 6 characters long!";
    isValid = false;
  } else if (document.querySelector("#password").value.length < 8) {
    document.querySelector("#passwordError").innerHTML =
      "Password must be at least 8 characters long!";
    isValid = false;
  } else if (
    document.querySelector("#password").value !=
    document.querySelector("#confirmPassword").value
  ) {
    document.querySelector("#confirmPasswordError").innerHTML =
      "Passwords do not match!";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
}
