import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from './pokemonSlice'

export const SinglePokemonPage = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon.pokemon)
    const pokemonStatus = useSelector(state => state.pokemon.status)

    const getPokemonClicked = () => {
        dispatch(fetchPokemon())
    }

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