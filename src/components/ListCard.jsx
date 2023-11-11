import React, {useState} from "react";
import Card from "./MyCard";

const ListCard = () => {
  const [list, setList] = useState([
    {
      name: "Lionel Messi",
      number: 10,
      position: "Delantero",
    },
    {
      name: "Cristiano Ronaldo",
      number: 7,
      position: "Delantero",
    },
    {
      name: "Andrés Iniesta",
      number: 6,
      position: "Centrocampista",
    },
    {
      name: "Xavi Hernández",
      number: 8,
      position: "Centrocampista",
    },
    {
      name: "Iker Casillas",
      number: 1,
      position: "Portero",
    },
    {
      name: "David Villa",
      number: 7,
      position: "Delantero",
    },
    {
      name: "Wesley Sneijder",
      number: 10,
      position: "Centrocampista",
    },
    {
      name: "Arjen Robben",
      number: 11,
      position: "Delantero",
    },
    {
      name: "Thomas Müller",
      number: 13,
      position: "Delantero",
    },
    {
      name: "Diego Forlán",
      number: 10,
      position: "Delantero",
    },
  ]);

  return (
    // le agrego la clase al contenedor que va a tener todas las cartas para que se ubiquen una al lado de la otra
    <div className="cardContainer"> 
      {list.map((jugador, index) => {
        return <Card key={index} jugador={jugador}> </Card>;
      })}
    </div>
  );
};

export default ListCard;
