const request = new XMLHttpRequest();

request.onload = function (){
    console.log('Loaded!');
    console.log(request.responseText);
};

request.open('GET', 'http://');

request.send ();
console.log('Sent!');