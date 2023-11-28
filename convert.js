function convertToMM() {
  var inches = document.getElementById('inchesInput').value;
  var millimeters = inches * 25.4;
  document.getElementById('result').innerText = millimeters.toFixed(2) + ' mm';
}

function convertToInches() {
  var millimeters = document.getElementById('mmInput').value;
  var inches = millimeters / 25.4;
  document.getElementById('resultMM').innerText = inches.toFixed(2) + ' "';
}
