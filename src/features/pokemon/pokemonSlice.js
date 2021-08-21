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
        moves: [
            {
                "move": {
                    "name": "transform",
                    "url": "https://pokeapi.co/api/v2/move/144/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            }
        ],
        name: "ditto",
        species: {
            "name": "no pokemon selected",
            "url": "url not available"
        },
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
    return { species : species, abilities : abilities };
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
            const { species, abilities } = action.payload;
            state.pokemon = { species : species, abilities : abilities }
            state.error = null;
        },
        [fetchPokemon.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default pokemonSlice.reducer