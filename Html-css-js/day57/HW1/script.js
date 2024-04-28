function submitForm() {
    var color = document.getElementById("color").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var text = document.getElementById("text").value;
    
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<div style='background-color:" + color + "; width:" + width + "px; height:" + height + "px;'>" + text + "</div>";
  }
  