class box{
    static color ='black';

    createBox (top,left,color){
        var reb = document.createElement("div");
        b.style.position='absolute';
        b.style.top = top;
        b.style.left = left;
        b.style.backgroundcolor= color;
        b.style.width = '100px';
        b.style.height = '100px';
        b.addEventListener ("mouseenter",function(){
            box.color=color;
        });
    }
        document.body.appendChild(ref);
}

function draw(){
    document.getElementById("d").style.top=event.clientY;
    document.getElementById("d").style.top=event.clientX;
    document.getElementById("d").style.top=box.color;
}

function pageLoad(){
    alert("hello");
    var b = new box();
    b.createBox(10,1,'green');
    b.createBox(10,700,'blue');
    b.createBox(400,10,'red');
    }
