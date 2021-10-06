

document.addEventListener('keydown', (event) => {

    let num = document.getElementById("num")
    let location = document.getElementById("location")
    let key = document.getElementById("key")
    let which = document.getElementById("which")
    let kcode = document.getElementById("code")

    let keyPress = event.key;
    num.textContent = (keyPress);

    let keyL = event.key;
    key.textContent = (keyL);

    let klocation = event.location;
    location.textContent = (klocation);
    
    let keyWhich = event.which;
    which.textContent = (keyWhich);

    let keyCodes = event.code;
    kcode.textContent = (keyCodes);
});