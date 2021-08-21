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
        stats: [
            {
                "base_stat": 48,
                "effort": 1,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                "base_stat": 48,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 48,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 48,
                "effort": 0,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 48,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 48,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
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
    return { species : species, abilities : abilities, moves: moves };
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
            const { species, abilities, moves } = action.payload;
            state.pokemon = { species : species, abilities : abilities, moves: moves }
            state.error = null;
        },
        [fetchPokemon.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default pokemonSlice.reducer