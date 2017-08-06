console.log('Loaded!');

//counter code

var button = document.getElementById('counter');

button.onclick = function() {
  //create request object
    var request = new XMLHttpRequest();
  //capture the response and store it an variable
    request.onreadyStatechange = function () {
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