import React from "react";
import "./style.css";

function Characters(props) {

  return (

    <main className="container">

        <div className="img-container">
          <img className="btn"
            src={props.image}
            alt={props.name}
            onClick={() => props.handleSelectedCharacter(props.id)}
          />
        </div>

    </main>

  );

}

export default Characters;
