import React, { useState } from "react";
import "./styles.css";
import {ListComponent} from "../listcomponent/ListComponent";

export const MainContent = (props) => {
    const movieDataset = props.movieDataset;
    let [movieList,setMovieList] = useState([]);
    let [buttonCss,setButtonCss] = useState("");

    let handleGenreClicked = (movieGenre) => {
        setMovieList(movieDataset[movieGenre]);
        setButtonCss(movieGenre);
    }

    let movieGenres = Object.keys(movieDataset);
    return (
        <div className="mainContent">
            <p className="title"> Choose your genre and view my recommendation </p>

            <div className="genreSection">
                {
                    movieGenres.map((movieGenre) => (
                        <button style={{ borderBottom: buttonCss===movieGenre?"1px solid pink": ""}} key={movieGenre} className="genre" onClick={() => {return handleGenreClicked(movieGenre)}}>{movieGenre}</button>
                    ))
                }
            </div>
            
            <ListComponent movieList={movieList} />
        </div>
    )
}