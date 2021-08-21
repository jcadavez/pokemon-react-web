import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from './pokemonSlice'

const setupAbilities = (abilities) => {
    const abilityStatus = abilities ? (abilities.length !== 0) : false;
    return abilityStatus ? abilities.map(ability => abilityCard(ability)) : 
        abilityCard({ "ability" : { "name" : "NONE", "url" : "none"}});
}

const abilityCard = (ability) => {
    return (
        <article className="ability">
            <h3>{ability.ability.name}</h3>
            <p>{ability.ability.url}</p>
        </article>
    )
}

export const SinglePokemonPage = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon.pokemon)
    const pokemonStatus = useSelector(state => state.pokemon.status)

    const getPokemonClicked = () => {
        dispatch(fetchPokemon())
    }

    const abilities = setupAbilities(pokemon.abilities);

    let content;

    if (!pokemon) {
        content = (
            <section>
                <h2>Pokemon does not exist!</h2>
            </section>
        )
    } else if (pokemonStatus === 'failed') {
        content = (
            <article>
                <h2>Error getting joke!</h2>
            </article>
        )
    } else {
        content = (
            <article className="pokemon">
                <h2>{pokemon.species.name}</h2>
                <p>{pokemon.species.url}</p>
                {abilities}
            </article>
        )
    }

    return (
        <section>
            {content}
            <button type="button" onClick={getPokemonClicked}>
                Get a Pokemon
            </button>
        </section>
    )
}