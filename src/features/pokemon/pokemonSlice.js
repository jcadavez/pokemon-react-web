import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemon: {
        forms: [
            {
                "name": "ditto",
                "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
            }
        ],
        height: 3,
        id: 132,
        name: "ditto",
        sprites: {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
            "back_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            "front_female": null
        },
        types: [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ],
        weight: 40
    },
    status: 'idle',
    error: null
}

export const fetchPokemon = createAsyncThunk('pokemon/fetchpokemon', async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
    const { abilities, forms, height, 
        id, moves, name, species, 
        sprites, stats, types, weight } = response
    return { species : species, abilities : abilities, moves: moves, stats: stats };
})

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPokemon.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPokemon.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            const { species, abilities, moves, stats } = action.payload;
            state.pokemon = { 
                species : species, 
                abilities : abilities, 
                moves: moves,
                stats: stats
            }
            state.error = null;
        },
        [fetchPokemon.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default pokemonSlice.reducer