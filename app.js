let num = document.getElementById("num")
let location = document.getElementById("location")
let code = document.getElementById("code")

document.addEventListener("keydown", (event) => {
    let keyPress = event.key;
    num.textContent = (keyPress);

    let keyLoc = event.location;
    location.textContent = (keyLoc);
    
    let keyCodes = event.code;
    code.textContent = (keyCodes);
});