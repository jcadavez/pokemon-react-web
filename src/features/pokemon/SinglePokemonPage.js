import React from 'react' 
import { useSelector } from 'react-redux'

export const SinglePokemonPage = () => {

    const pokemon = useSelector(state => state.pokemon.pokemon)

    if (!pokemon) {
        return (
            <section>
                <h2>Pokemon does not exist!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="pokemon">
                <h2>{pokemon.species.name}</h2>
                <p>{pokemon.species.url}</p>
            </article>
        </section>
    )
}