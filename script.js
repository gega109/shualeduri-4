let index;
let modeButton = document.getElementById("mode");
let form = document.getElementById("form");
let inputText = document.getElementById("input");
let btnText = document.getElementById("btntext");
let mainMoon = document.getElementById("main_moon");
let mainSun = document.getElementById("main_sun");
let devFinder = document.getElementById("Header");
let inputBox = document.getElementById("input_box");
let user = document.getElementById("user");
let numberofrep = document.getElementById("numberofrep");
let numberoffollower = document.getElementById("numberoffollower");
let numberoffollowing = document.getElementById("numberoffollowing");
let followerBox = document.getElementById("follower_box");
let loc = document.getElementById("loc");
let gitlink = document.getElementById("gitlink");
let twit = document.getElementById("twit");
let office = document.getElementById("office");
let mainBox = document.getElementById("main_box");
let login = document.getElementById("name");
let date = document.getElementById("date");
let information = document.getElementById("information");
let image = document.getElementById("image");

if (localStorage.getItem("modeIndex") !== null) {
  index = parseInt(localStorage.getItem("modeIndex"), 10);
} else {
  index = 0;
}

function ColorMode() {
  if (index === 0) {
    btnText.textContent = "LIGHT";
    mainMoon.style.display = "none";
    mainSun.style.display = "inline-block";
    devFinder.style.color = "#FFFFFF";
    inputBox.style.backgroundColor = "#1E2A47";
    user.style.color = "#FFF";
    numberofrep.style.color = "#FFF";
    numberoffollower.style.color = "#FFF";
    numberoffollowing.style.color = "#FFF";
    followerBox.style.backgroundColor = "#141D2F";
    loc.style.color = "#FFF";
    gitlink.style.color = "#FFF";
    twit.style.color = "#FFF";
    office.style.color = "#FFF";
    mainBox.style.backgroundColor = "#1E2A47";
    document.body.style.backgroundColor = "#141D2F";
    modeButton.style.backgroundColor = "#141D2F";
    btnText.style.color = "#FFF";
    inputText.style.color = "#FFF";
    index++;
  } else if (index === 1) {
    btnText.textContent = "DARK";
    mainSun.style.display = "none";
    mainMoon.style.display = "inline-block";
    document.body.style.backgroundColor = "#F6F8FF";
    devFinder.style.color = "#222731";
    inputBox.style.backgroundColor = "#FEFEFE";
    user.style.color = "#2B3442";
    numberofrep.style.color = "#2B3442";
    numberoffollower.style.color = "#2B3442";
    numberoffollowing.style.color = "#2B3442";
    followerBox.style.backgroundColor = "#F6F8FF";
    loc.style.color = "#4B6A9B";
    gitlink.style.color = "#4B6A9B";
    twit.style.color = "#4B6A9B";
    office.style.color = "#4B6A9B";
    mainBox.style.backgroundColor = "#FEFEFE";
    document.body.style.backgroundColor = "#F6F8FF";
    modeButton.style.backgroundColor = "#F6F8FF";
    btnText.style.color = "#697C9A";
    inputText.style.color = "black";
    index--;
  }
}

ColorMode();

modeButton.addEventListener("click", () => {
  localStorage.setItem("modeIndex", index);
  ColorMode();
});

async function FetchData(userName) {
  try {
    let data = await fetch(`https://api.github.com/users/${userName}`);
    let response = await data.json();
    console.log(response);
    if (response && !response.message) {
      user.textContent = response.name;
      login.textContent = response.login;
      date.textContent = response.created_at;
      image.src = response.avatar_url;
      information.textContent = response.bio;
      numberofrep.textContent = response.public_repos;
      numberoffollower.textContent = response.followers;
      numberoffollowing.textContent = response.following;
      loc.textContent = response.location;
      gitlink.textContent = response.email;
      twit.textContent = response.hireable;
      office.textContent = response.company;
    } else {
      user.textContent = "Undefined";
      login.textContent = "Undefined";
      date.textContent = "Undefined";
      image.src = "Undefined";
      information.textContent = "Undefined";
      numberofrep.textContent = "Undefined";
      numberoffollower.textContent = "Undefined";
      numberoffollowing.textContent = "Undefined";
      loc.textContent = "Undefined";
      gitlink.textContent = "Undefined";
      twit.textContent = "Undefined";
      office.textContent = "Undefined";
    }
  } catch (error) {
    if (inputText.value !== userName) {
        
    }
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = inputText.value;
  FetchData(userName);
  inputText.value = "";
});
