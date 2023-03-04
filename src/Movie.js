import React from "react";

const IMG_URL = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, vote_average, poster_path }) => {
  return (
    <div className="movie">
      <img src={IMG_URL + poster_path} alt="img" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
