function handleAlert() {
    return alert("Olá turma");
}
function getTexto() {
    var h1 = document.querySelector("h1");
    if (h1 === null || h1 === void 0 ? void 0 : h1.innerText) {
        h1.setAttribute("style", "color:pink");
    }
    else {
        console.log("Não achei!");
    }
}
var darkmode = false;
var whitemode = true;
function getText() {
    var div = document.querySelector('section');
    if (!darkmode) {
        darkmode = false;
        if (div != null) {
            div.style.backgroundColor = "red";
            div.style.color = "black";
        }
    }
    if (!darkmode) {
        darkmode = true;
        if (div != null) {
            div.style.backgroundColor = "blue";
            div.style.color = "black";
        }
    }
    else {
        darkmode = false;
        if (div != null) {
            div.style.backgroundColor = "green";
            div.style.color = "black";
        }
    }
}
