class draw{
    constructor (T,L){

        var ref = document.createElement("span");
        ref.innerHTML = '0';
        ref.style.position='absolute';
        ref.style.top = T;
        ref.style.left = L;
        document.body.appendChild(ref);
    }
}

function doSomething(){
    var X = event.clientX;
    var Y = event.clientY;
    var ref = new draw (Y,X);
}