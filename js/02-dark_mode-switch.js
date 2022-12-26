const colorSwitch = document.getElementById("input-color-switch");

colorSwitch.addEventListener("click", checkMode);

function checkMode() {
    console.log("checking...");
    if (colorSwitch.checked) {
        console.log("dark on");
        darkModeOn();
        localStorage.setItem("theme", "dark")
    } else {
        console.log("dark off");
        darkModeOff();
        localStorage.setItem("theme", "light")
    }
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("input-color-switch").checked = true;
} else {
    document.body.classList.remove("dark-mode").checked = false;
}