import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from './pokemonSlice'

const setupSpecies = (species) => {
    const cardContent = species ? speciesCard(species) : 
        speciesCard({"name": "no pokemon selected", "url": "url not available"});
    return (
        <article className="pokeSection">
            <h1>Species</h1>
            {cardContent}
        </article>
    )
}

const speciesCard = (specie) => {
    return (
        <article className="specie">
            <h2>{specie.name}</h2>
            <p>{specie.url}</p>
        </article>
    )
}

const setupAbilities = (abilities) => {
    const abilityStatus = abilities ? (abilities.length !== 0) : false;
    const cardContent = abilityStatus ? abilities.map(ability => abilityCard(ability)) : 
        abilityCard({ "ability" : { "name" : "NONE", "url" : "none"}});
    return (
        <article className="pokeSection">
            <h1>Abilities</h1>
            {cardContent}
        </article>
    )
}

const abilityCard = (ability) => {
    return (
        <article className="ability">
            <h3>{ability.ability.name}</h3>
            <p>{ability.ability.url}</p>
        </article>
    )
}

const setupMoves = (moves) => {
    const movesStatus = moves ? (moves.length !== 0) : false;
    const cardContent = movesStatus ? moves.map(move => moveCard(move)) : 
        moveCard({ "move" : {"name" : "no moves available"}})
    return (
        <article className="pokeSection">
            <h1>Moves</h1>
            {cardContent}
        </article>
    )
}

const moveCard = (move) => {
    return (
        <article className="move">
            <h3>{move.move.name}</h3>
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
    const species = setupSpecies(pokemon.species);
    const moves = setupMoves(pokemon.moves);

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
                {species}
                {abilities}
                {moves}
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