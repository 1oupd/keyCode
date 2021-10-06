

document.addEventListener('keydown', (event) => {

    let num = document.getElementById("num")
    let location = document.getElementById("location")
    let kcode = document.getElementById("code")

    let keyPress = event.key;
    num.textContent = (keyPress);

    let keyLoc = event.location;
    location.textContent = (keyLoc);
    
    let keyCodes = event.which;
    kcode.textContent = (keyCodes);
});