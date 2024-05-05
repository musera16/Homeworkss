function changeColor() {
    var button = document.getElementById("colorButton");
    button.style.backgroundColor = "blue";
}

document.getElementById("colorButton").addEventListener("click", changeColor);
