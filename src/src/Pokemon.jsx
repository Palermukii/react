import React, { useEffect, useState } from 'react'


function Pokemon(){

    const [pokemonBuscado, setPokemonBuscado] = useState('pikachu')
    const [pokemon, setPokemon] = useState('')


    useEffect(() => {
        fetch( `https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}/`)
        .then(response => response.json())
        .then(data => setPokemon(data))
        .catch (error => console.log(error))
    }, [pokemonBuscado])

    const handleChange = (e) => {
        e.preventDefault()
        setPokemonBuscado(e.target.value)
    }

  return (
    <div>
<input type="text"  onChange={e => handleChange(e) }/>

{ pokemon ? (
                <div>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.front_default}></img>
                </div>
            )
            :
            (
                <p>Cargando pokemon</p>
            )
        }

    </div>
  )
}

export default Pokemon

