
const superhero = document.getElementById('superhero');
const membersContainer = document.getElementById('membersContainer');


const request = new XMLHttpRequest(); //create a request

    request.onload = () => {
        const parsedData = JSON.parse(request.responseText);
        console.log('DATA: ', parsedData);
        displaySuperheroData(parsedData);
};
//open request, and tell is the method and url to send to.
    request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
    request.send ();
    console.log('Sent!'); //send request

function displaySuperheroData(data){

    document.getElementById('heroTitle').innerText = data.squadName;
    document.getElementById('homeTown').innerText = 'Hometown: ' + data.homeTown;
    document.getElementById('formed').innerText = 'Formed: ' + data.formed;

    data.members.forEach(item => membersContainer.append(generateMember(item)));

    function generateMember(member){

        const memberWrapper=document.createElement('div');
        memberWrapper.className='memberWrapper';
         
        const title=document.createElement ('h2');
        title.innerText=member.name;
        memberWrapper.append(title);

        const age=document.createElement ('p');
        age.innerText='Age: ' + member.age;
        memberWrapper.append(age);
        
        const power=document.createElement ('p');
        power.innerText='Powers: ' +member.powers;
        memberWrapper.append(power);
        
        return memberWrapper;
     }
}

