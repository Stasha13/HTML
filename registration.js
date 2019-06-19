const formdata = {
};

function handleSubmit (event) {

    for(let control of event){
        if(control.id){ //should we store this?
        formdata[control.id] = control.value;
    }
}

    console.log ("it happened!", event, formdata);
    event.reset(); 

    sessionStorage.setItem('userData', JSON.stringify(formdata)); 
    window.location = "nextpage.html";

    return false; //override default behaviour
}