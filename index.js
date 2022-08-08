const baseURL = 'https://v2.jokeapi.dev/joke/Any?'

const safeMode = 'safe-mode'
const frenchMode = 'lang=fr'


let setupHTML = document.getElementById('setup')
let deliveryHTML = document.getElementById('delivery')


const fetchJokes = async (event) => {
    if(event.target.id === 'safeButton'){
        const response = await  fetch(baseURL + safeMode).then(res => res.json())
        
         let setup = response.setup
         let delivery = response.delivery
         let joke = response.joke
        
        displayJokes(setup, delivery, joke)
    } else if (event.target.id === 'frenchButton'){
        const response = await  fetch(baseURL + frenchMode).then(res => res.json())
        
        let setup = response.setup
        let delivery = response.delivery
        let joke = response.joke
       
       displayJokes(setup, delivery, joke)
     } else {
        const response = await  fetch(baseURL).then(res => res.json())
        
        let setup = response.setup
        let delivery = response.delivery
        let joke = response.joke
       
       displayJokes(setup, delivery, joke)
     }
        
 }



function displayJokes (setup, delivery, joke){
    if(setup){
        console.log(setup, delivery)
        setupHTML.innerText = setup
        deliveryHTML.innerText = delivery
    } else {
        setupHTML.innerText = joke
        deliveryHTML.innerHTML = ''
    }
}

//French 

const getFrenchJokes = async () => {
    const response = await fetch(frenchURL).then(res => res.json())
    // console.log(response)
}


let button = document.getElementById('jokeButton')
button.addEventListener('click', fetchJokes)

let safeButton = document.getElementById('safeButton')
safeButton.addEventListener('click', fetchJokes)

let frenchButton = document.getElementById('frenchButton')
frenchButton.addEventListener('click', fetchJokes)

/**
 * put data in the variable 
 * isolate  the information
 * connect the two 
 * send over the data to html
 * button to call a new joke on very click 
 * 
 * 
 * 
 */
fetchJokes()
// getFrenchJokes()


module.exports = fetchJokes