import React from "react";
import "./List.css";
import { Album } from "./Album";
// import ReactDOM from 'react-dom';

export const List = ({ albums }) => {
  const list_music = albums.map((element, index) => (
    <Album key={index} titulo={element.musica} />
  ));

  return (
    <div className="flex-list">
      <h1>Musicas</h1>
      <div className="list-content">{list_music}</div>
    </div>
  );
};
