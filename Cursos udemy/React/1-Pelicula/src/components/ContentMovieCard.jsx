import { useEffect, useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from  "./MovieCArd"
import "./context.css"

export function ContextMovieCard() {
    const [movies, SetMovies] = useState([]);
    useEffect(() => {
      get("/discover/movie").then((data) => {
        SetMovies(data.results);
        console.log(data);
      });
    }, []);


    return (
        <div>     
          <h1>------ContenMovieCArd------</h1>
          <ul className="container">
            {movies.map((movie) =>(
              <MovieCard key={movie.id}  peli={movie}/>
            ))}
          </ul>
          <h1>----------------------</h1>
        </div> 
   
      );
}