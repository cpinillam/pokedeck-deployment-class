import React, { Fragment } from 'react';
import pokeLogo from  '../assets/img/poke-logo.png';


export function HeaderPokemon() {
    return (
        <Fragment>
            <header className="header">
            <div className="header-bg"></div>
            <img className="header-logo" src={pokeLogo} alt="pokemon-logo"/>
            <nav className="header-search_bar">
                <input type="text" name="search" placeholder="Search"/>
                <button type="submit">GO</button>
            </nav>
            </header>
        </Fragment>
    )
}
