console.log('Loaded!');

//counter code

var button = getElementById('counter');
var counter = 0;
button.onclick = function() {
    
counter = counter + 1;
var span = getElementById('count');
span.innerHTML = counter.toString();
    
};