import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

import {
    useHistory
} from "react-router-dom";
import './requesMovies.css';


function RequestMovie(props) {
    const [movieResult, setMovieResult] = useState({})
    
    
    const history = useHistory()
    useEffect(() => {
        const options = {
            method: 'GET',
            url: `http://www.omdbapi.com/?apikey=d5338ddc&s=${props.searchValue}`,
        };
        axios.request(options).then(function (response) {
            console.log(response.data.Error)
            
            if (response.data.Error ==="Incorrect IMDb ID.") {
                props.setLoading("Enter Any Movie Name")
            } else if (response.data.Error === "Too many results."){
                props.setLoading("Too many results")
            } else if (response.data.Error === "Movie not found!"){
                props.setLoading("Movie not found!")
            }else{
                props.setLoading("")
            }
            setMovieResult((prevValue) => {
                return response.data;
            })

        }).catch(function (error) {
            console.error(error);
        });
    }, [props.searchValue, props])

    function clickHandle(id) {
        history.push(`/${id}`)
    }


    return (
        <div className="container">
            {
                movieResult.Search && movieResult.Search.map((movie) => {
                    return (
                        <div className="card" onClick={(e) => clickHandle(movie.imdbID)} key={movie.imdbID}>
                            <h3><b> {movie.Title} </b></h3>
                           <img className="poster" src={movie.Poster} alt={movie.Title}/>
                        </div>
                    )
                })

            }

                        </div>
                    )
                }
// Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// Title: "Batman Begins"
// Type: "movie"
// Year: "2005"
// imdbID: "tt0372784"

export default RequestMovie;