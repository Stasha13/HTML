const formdata = {

};

function handleSubmit (event) {

    for(let control of event){
        formdata[control.id] = control.value;
}
    console.log ("it happened!", formdata);
    window.location = "nextpage.html";
    return false;
}
