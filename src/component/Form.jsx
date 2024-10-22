import React from "react";
import Label from "./Label";
import "../assets/css/common.css";

export default function Form({ pokemon }) {
  const color = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#ff0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#efb549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190ff",
  };

  const backcolor = color[pokemon?.types[0]?.type?.name];

  const stylecard = {
    background: `radial-gradient(circle at 50% 0%, ${backcolor} 36%, #fff 36%)`,
  };
  // console.log(pokemon?.types)
  return (
    <div className="pokecard">
      {/* <div className='Pokemon'>
            <Label label={`Pokemon Name:`} className={'pokeinfo'}/>
            <Label label={`${pokemon?.name}`}/>
            <img src={pokemon?.sprites?.front_default} alt="hello" className='pokeimg'/>
            <Label label = {'Types'} className={'pokeinfo'}/>
            <ul>
            {pokemon?.types?.map(item=><li>{item?.type?.name}</li>)}
            </ul>
        </div> */}

      <div id="card" style={stylecard}>
        {/* {console.log(themecolor)} */}
        <p className="hp">
          <span>Hp</span>
          {pokemon?.stats[0]?.base_stat}
        </p>
        <img src={pokemon?.sprites?.front_default} alt="" />
        <h2 className="poke-name">{pokemon?.name}</h2>
        <div className="types">
          {pokemon?.types?.map((element, index) => {
            return (
              <span
                key={element?.type?.name}
                style={{
                  background: `${color[pokemon?.types[index]?.type?.name]}`,
                }}
              >
                {element?.type?.name}
              </span>
            );
          })}
        </div>
        <div className="stats">
          <div>
            <h3>{pokemon?.stats[1]?.base_stat}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>{pokemon?.stats[2]?.base_stat}</h3>
            <p>Defence</p>
          </div>
          <div>
            <h3>{pokemon?.stats[5]?.base_stat}</h3>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
