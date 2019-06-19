const userData = JSON.parse(sessionStorage.getItem('userData'));

//const nameSpan = document.getElementById('nameSpan'); 
//nameSpan.innerText=userData.firstname + ' ' + userData.lastname

const container = document.getElementById("putStuffHere");
for (let key in userData) {
    const el = document.createElement('h4');
    el.innerText = key + ': ' + userData[key];
    container.append(el);
}