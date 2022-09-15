import React, {useState, useEffect} from 'react';
import { ItemPokemon } from './ItemPokemon';
import { getData } from './PokemonData';


export function MainPokemon() {

 let [listPokemons, setListPokemons] = useState([
    {
        name: 'charmeleon',
        type: 'fire',
        color: 'green'
    }
    ]);

    useEffect(()=>{
        const params = '?limit=10'
        getData(params)
        .then(pokeItem=> setListPokemons(pokeItem.results))
        },[]);

        return (
            <React.Fragment>
                <main className="list-pokemons">               
                {listPokemons.map((pokemonItem) => <ItemPokemon key={pokemonItem.name} data={pokemonItem}/>)}                 
                </main>
            </React.Fragment>
        )
       
    }
    
    



    

