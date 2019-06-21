class draw{
    constructor (T,L,color){

        var ref = document.createElement("span");
        ref.innerHTML = "Nastassja";
        ref.style.position='absolute';
        ref.style.color= color;
        ref.style.top = T;
        ref.style.left = L;
        document.body.appendChild(ref);
    }
}

function doSomething(){
    var X = event.clientX;
    var Y = event.clientY;
    if (event.ctrlKey){
        var obj = new draw (Y,X,"Green");
    }
    else if (event.altKey){
        var obj = new draw (Y,X,"Blue");
    }
    else {
        var obj = new draw (Y,X,"Red");
    }
}