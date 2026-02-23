document.querySelector("#zipCode").addEventListener("change", displayCity);
document
  .querySelector("#passwordInput")
  .addEventListener("click", passwordGeneration);

document
  .querySelector("#usernameInput")
  .addEventListener("input", checkUsername);

document.querySelector("#state").addEventListener("change", updateCounty);

document.querySelector("#passwordInput").addEventListener("input", passwordCheck);

// let zipElement = document.querySelector("#zipcode");

displayStates();
async function displayStates() {
  let url = "https://csumb.space/api/allStatesAPI.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error accessing API endpoint");
    }
    const data = await response.json();
    console.log(data);
    //alert(data[0].state);

    for (let i of data) {
      let optionEl = document.createElement("option");
      optionEl.textContent = i.state;
      optionEl.value = i.usps;

      document.querySelector("#state").append(optionEl);
    }
  } catch (err) {
    if (err instanceof TypeError) {
      alert("Error accessing API endpoint (network failure)");
    } else {
      alert(err.message);
    }
  } //catch
}

async function updateCounty() {
  let state = document.querySelector("#state").value;
  let url = "https://csumb.space/api/countyListAPI.php?state=" + state;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error accessing API endpoint");
    }
    const data = await response.json();

    document.querySelector("#countySelect").innerHTML = "";
    for (let i of data) {
      let optionEl = document.createElement("option");
      optionEl.textContent = i.county;

      document.querySelector("#countySelect").append(optionEl);
    }
  } catch (err) {
    if (err instanceof TypeError) {
      alert("Error accessing API endpoint (network failure)");
    } else {
      alert(err.message);
    }
  }
}

async function displayCity() {
  //alert("displaying city...")
  let zipCode = document.querySelector("#zipCode").value;
  let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  //alert(data.city);
  document.querySelector("#city").textContent = data.city;
  document.querySelector("#latitude").textContent = data.latitude;
  document.querySelector("#longitude").textContent = data.longitude;
}

async function passwordGeneration() {
  let url = "https://csumb.space/api/suggestedPassword.php?length=8";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error accessing API endpoint");
    }

    const data = await response.json();
    document.querySelector("#passwordSuggest").textContent = data.password;
  } catch (err) {
    if (err instanceof TypeError) {
      alert("Error accessing API endpoint (network failure)");
    } else {
      alert(err.message);
    }
  }
}

async function checkUsername() {
  let username = document.querySelector("#usernameInput").value;
  let url = "https://csumb.space/api/usernamesAPI.php?username=" + username;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error accessing API endpoint");
    }
    const data = await response.json();

    if (data.available == true) {
      document.querySelector("#ifTaken").textContent =
        "The username is available";
      document.querySelector("#ifTaken").style.color = "green";
    } else {
      document.querySelector("#ifTaken").textContent = "The username is taken";
      document.querySelector("#ifTaken").style.color = "red";
    }
  } catch (err) {
    if (err instanceof TypeError) {
      alert("Error accessing API endpoint (network failure)");
    } else {
      alert(err.message);
    }
  }
}

function passwordCheck() {
  let input = document.querySelector("#passwordInput").value;
  if (input.length < 6) {
      document.querySelector("#passwordMessage").textContent = "Password must be at least 6 characters";
      document.querySelector("#passwordMessage").style.color = "red";
  } else {
    document.querySelector("#passwordMessage").textContent = "";
  }
}
