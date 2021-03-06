import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
import './movie.css'
function Movie(props) {

    const [movie, setMovie] = useState({})
    const[loading,setLoading] = useState(false)
    const urlHistory = useParams()

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://www.omdbapi.com/?apikey=d5338ddc&i=${urlHistory.id}`,
        };
        axios.request(options).then(function (response) {
                setLoading(true)
            setMovie((prevValue) => {
                return response.data;
            })

        }).catch(function (error) {
            console.error(error);
        });
    }, [urlHistory.id])
function renderUi(){
    return (<div className="single-movie-container">
        <div className="image-div" >
            <img className="single-img" src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="details">
            <h2> {movie.Title} </h2> <br />
            <p> <strong> Plot: </strong> {movie.Plot} </p>
            <p> <strong> Starring: </strong>{" " + movie.Actors}</p>
            <p> <strong> Director: </strong> {" " + movie.Director} </p>
            <p> <strong>Language:</strong> {movie.Language} </p>
            <p> <strong> BoxOffice: </strong> {" " + movie.BoxOffice} </p>
            <p> <strong> Production: </strong> {" " + movie.Production} </p>
            <p> <strong>Released Year:</strong> {" " + movie.Realeased} </p>
            <p> <strong> Runtime: </strong> {" " + movie.Runtime} </p>
            <p> <strong> Type: </strong> {" " + movie.Type} </p>
        </div>
    </div>)
}
    return (
        <React.Fragment>
            <h1> Movie Details</h1>
            {loading ? renderUi() : <h2 className="load"> Loading... </h2>}
        </React.Fragment>
        
    )
}

export default Movie;