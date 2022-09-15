const api = 'https://pokeapi.co/api/v2/pokemon';
let params = '?limit=10'

async function getData(params) {
  return fetch(`${api}/${params}`)
        .then(response => response.json())  
}

function renderItem(element){
   const listPokemons = document.querySelector('.list-pokemons');
   listPokemons.innerHTML = '';

   getData(element.name).then(data => {
       listPokemons.innerHTML += `<article onclick='openDetail(${data.id})' class="list-pokemons-item">
    <div class='list-pokemons-item-content'>
       <img src="${data.sprites.front_default} " alt="pokemon-1">
       <h3>${data.name} 
           <span>${data.types[0].type.name} </span>
       </h3>
     </div>  
    </article>` 
    })   
}

function renderList(params){
    getData(params).then(data =>{
        data.results.map((e)=> renderItem(e))
    })
   
}

function openDetail(e){
    console.log(e)
}

function init() {
  renderList(params)
}

init();