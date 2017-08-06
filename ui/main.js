console.log('Loaded!');

//to change the txt on div
var element = document.getElementById('main-text');
element.innerHTML = 'Lal Broz';

//move the picture
var img = document.getElementById('arun');
img.onClick = function () {
 img.style.marginLeft = '100px';
    
};