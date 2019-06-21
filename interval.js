class fire{
    constructor (T,L,color){

        var ref = document.createElement("span");
        ref.innerHTML = "0";
        ref.style.position='absolute';
        ref.style.color= color;
        ref.style.top = T;
        ref.style.left = L;
        document.body.appendChild(ref);

    var timer = window.setInterval(
        function(){
         ref.style.top = parseInt(ref.style.top)-10;
         if (parseInt(ref.style.top<=10)){
              window.clearInterval(timer);
         }
        }, 200);
    }
}

function doSomething(){
    var X = event.clientX;
    var Y = event.clientY;
    var ref = new fire (X,Y,'Red');
}