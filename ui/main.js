console.log('Loaded!');

//to change the txt on div
var element = document.getElementById('main-text');
element.innerHTML = 'Lal Broz';

//move the picture
var img = document.getElementById('arun');
img.onclick = function () {
    
    var marginLeft = 0;
    function moveRight () {
     marginLeft = marginLeft + 3;
     img.style.marginLeft = marginLeft + 'px';
 }
 var interval = setInterval(moveRight, 25);
    
};