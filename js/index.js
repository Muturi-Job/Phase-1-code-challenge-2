
document.addEventListener('DOMContentLoaded', ()=>{
    handleGet();
});
//link HTML to js
const animalList = document.getElementById('animal-list')
const animalName = document.getElementById('animal-name')
const animalImage = document.getElementById('animal-image')
const animalVoteCount = document.getElementById('animal-vote-count')
const animalVotesForm = document.getElementById('votes-form') 
//Function to fetch the data
function handleGet() {
    fetch('http://localhost:3000/characters')
        .then(res => res.json())
        .then(data => handleCharacters(data))
}
function handleCharacters(data) {
    data.forEach((data) => {
        const nameSpan = document.createElement('li')
        nameSpan.textContent = data.name;
        animalList.appendChild(nameSpan);
        nameSpan.addEventListener('click', () =>{
            animalName.textContent = data.name;
            animalImage.setAttribute('src', data.image);
            animalVoteCount.textContent = data.votes;
        });
    });
}                    

   
