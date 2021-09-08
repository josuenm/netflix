import React from "react";
import "./Header.css";

const index = ({ background }) => {
  return (
    <header className={background ? "bg" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Logo da Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt="Imagem de perfil"
          />
        </a>
      </div>
    </header>
  );
};

export default index;
