import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from './pokemonSlice'

import sprite_front from './nosprite_front.png'
import sprite_back from './nosprite_back.png'

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

const setupStats = (stats) => {
    const statsStatus = stats ? (stats.length !== 0) : false;
    const statsContent = statsStatus ? stats.map(stat => statCard(stat)) :
        statCard({ stat : { name : "No stats received"}, base_stat : "N/A"})
    return (
        <article className="pokeSection">
            <h1>Stats</h1>
            {statsContent}
        </article>
    )
}

const statCard = (stat) => {
    return (
        <article className="stat">
            <h3>{`${stat.stat.name} : ${stat.base_stat}`}</h3>
        </article>
    )
}

const setupSprites = (sprites) => {
    const layoutSprites = (sprites) => {
        let content;
        if (!sprites) {
            content = (
                <article className="spriteLayout">
                    {spriteCard(sprite_front)}
                    {spriteCard(sprite_back)}
                </article>
            )
        } else {
            content = (
                <article className="spriteLayout">
                    {sprites.front_default ? spriteCard(sprites.front_default, "Front") : spriteCard(sprite_front, "Front")}
                    {sprites.back_default ? spriteCard(sprites.back_default, "Back") : spriteCard(sprite_back, "Back")}
                </article>
            )
        }
        return content;
    }
    return (
        <article className="pokeSection">
            <h1>Sprites</h1>
            {layoutSprites(sprites)}
        </article>
    )
}

const spriteCard = (sprite, angle) => {
    return (
        <article className="sprite">
            <h4>{angle ? angle : "no angle"}</h4>
            <img 
                src={sprite} 
                alt="no sprite found">
            </img>
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
    const stats = setupStats(pokemon.stats);
    const sprites = setupSprites(pokemon.sprites)

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
                {stats}
                {sprites}
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