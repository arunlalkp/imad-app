console.log('Loaded!');

//counter code

var button = document.getElementById('counter');

button.onclick = function() {
  //create request object
    var request = new XMLHttpRequest();
  //capture the response and store it an variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
            if (request.status === 200) {
                var counter = response.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };

//make the request
    request.open('GET', 'http://arunlalkpkp78.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onlick = function () {
    //make the request to the server and send the name
    //capture the list of names,and render it as a list
    
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i<names.length; i++) {
        list += '<li>' + names[i] + '</li>';
        
       }
    
    var ui = document.getElementById('namelist');
    ui.innerHTML = list; 
    
};