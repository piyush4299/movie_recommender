import React from "react";
import "./styles.css";

export const ListComponent = ({movieList}) => {
    console.log("movie", movieList);    
    return ( 
        <div className="movieListComponent">
            {
                movieList.map((movie) => (
                    <div key={movie.movie_name} className="movieCard">
                        <p className="movieName">{movie.movie_name}</p>
                        <p className="movieRating">{movie.my_imdb}</p>
                        <p className="movieComments">{movie.comments}</p>
                    </div>
                ))
            }
        </div>
    )
}