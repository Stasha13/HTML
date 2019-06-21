const formData = {};

function handleSubmit(event) {
  //debugger
  for (let e of event) {
      if(e.name) {
          formData[e.name] = e.value;
      }
  }
  console.log('handle submit works!', formData);

  const data = JSON.stringify(formData);
  regUser(data);
  return false;
}

function regUser(value) {
  const request = new XMLHttpRequest()

  request.onload = () => {
      // const parsedData = JSON.parse(request.responseText);
      // console.log("request for login:", parsedData);
  }
  const address = 'https://us-central1-qac-sandbox.cloudfunctions.net/setUser';
  request.open('POST', address);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(value);
}