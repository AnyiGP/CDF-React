import React from "react";


const Card = ({ jugador }) => {
  const { name, position, number } = jugador;
  return (

    <div class="card">
      <p class="heading">Jugadores Top 10</p>
      <p>Powered By Anyi</p>
      <p>{name}</p>
      <p>{position}</p>
      <p>{number}</p>
    </div>

  );
};

export default Card
