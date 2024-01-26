let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sunset.jpeg") {
    myImage.setAttribute("src", "images/smile.jpeg");
  } else {
    myImage.setAttribute("src", "images/sunset.jpeg");
  }
};