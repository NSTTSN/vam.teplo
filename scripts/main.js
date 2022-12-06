var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pryazha.jpg') {
      myImage.setAttribute ('src', 'images/pryazha1.jpg');
    } else {
      myImage.setAttribute ( 'src', 'images/pryazha.jpg');
    }
}
myButton = document.querySelector('button');
myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Вам Тепло, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Вам тепло, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
