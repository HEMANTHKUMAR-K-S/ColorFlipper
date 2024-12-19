const typecolor1 = document.getElementsByClassName('button-type')[0];
 function changeColor(name) {
    typecolor1.style.backgroundColor = name;
 }

 function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    typecolor1.style.backgroundColor = "#" + randomColor;
 }
 