const animalDetails = document.getElementById("animal-details");
const animalList = document.getElementById('animal-list');

fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(data => {
       
        data.forEach(animal => {
            const name = document.createElement('li');
            name.innerHTML = animal.name;
            animalList.appendChild(name);
            name.addEventListener('onclick', () => handleDetails(animal));
            console.log(handleDetails(animal))
        })
    
    function handleDetails() {
        (animalDetails) => {
            const {name, image , votes} = animalDetails;
            animalDetails.innerHTML = `
            <p>${name}</p>
            <img src = '${image}' >
            <p>Total Votes: ${votes} </p>
            `;
        }}
    })

