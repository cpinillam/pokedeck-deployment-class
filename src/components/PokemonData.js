const api = 'https://pokeapi.co/api/v2/pokemon';


async function getData(params) {
  return fetch(`${api}/${params}`)
        .then(response => response.json())  
}



const pokemonsData = [
    {
        name: 'caterpil',
        type: 'fire',
        color: 'blue'
    },
    {
        name: 'charmeleon',
        type: 'fire',
        color: 'green'
    },
    {
        name: 'bulbasaur',
        type: 'water',
        color: 'red'
    }
] 

export {pokemonsData, getData}