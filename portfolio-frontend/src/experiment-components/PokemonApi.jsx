import React from "react"

const getPoke = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/turtwig')
  const data = await res.json()
  if(data){
    alert(data.name.toUpperCase())
  }
}

export default function PokemonApi(){
  return (
    <div>
      <button onClick={getPoke}>Hello</button>
    </div>
  );
}

