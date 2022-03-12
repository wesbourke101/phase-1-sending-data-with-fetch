
function submitData(name, email) {  
    const nameingObject = {
        name: name,
        email: email,
    }
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(nameingObject),
      };

  fetch("http://localhost:3000/users", configurationObject)
  .then((response) => {
    return response.json();
  })
  .then((object) => {
    let idValue = object.id
    const postLocation = document.querySelector('#here')
    postLocation.append(idValue)
  })
  .catch((error) => {
    //alert("Bad things! Ragnarők!");
    let errorMess = error.message;
    console.log(errorMess)
    postLocation.append(errorMess)
  });
}
//submitData("sad " , "dad")