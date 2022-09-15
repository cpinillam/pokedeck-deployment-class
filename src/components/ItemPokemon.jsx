import React, {useEffect, useState} from 'react'
import { getData } from './PokemonData';

export function ItemPokemon({data}) {
    const [pokemonInfo, setPokemonInfo] = useState({name:'',sprites:'',types:[]});

    useEffect(()=>{
        getData(data.name)
        .then(pokemonItem => setPokemonInfo(pokemonItem))
        },[]);

    return (
        <React.Fragment>
          <article className="list-pokemons-item">
           <div className='list-pokemons-item-content'>
              <img src={pokemonInfo.sprites.front_default} alt="pokemon-1" />
              <h3>{pokemonInfo.name} 
                  <span>grass</span>
              </h3>
            </div>  
       </article>
        </React.Fragment>
    )
}
