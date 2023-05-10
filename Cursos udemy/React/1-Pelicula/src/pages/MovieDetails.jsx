import {get} from "../data/httpClient"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieImg } from "../utils/getMovieImg";


 export function MovieDeatils (){
     const {id} = useParams
     const [movie, setMovie] = useState([]);

     useEffect(() => {
         get("/movie/"+id).then((data)=>{
             setMovie(data);
         })
     },[id]);
     const imgeUrl = getMovieImg(movie.poster_path,500);

// export function MovieDeatils() {
//     const { id } = useParams();
//     const [movie, setMovie] = useState([]);
//     useEffect(() => {
//       get("/movie/" + id).then((data) => {
//         setMovie(data);        
//       });
//     }, [id]);
//     const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
    <div>
        <h1>{movie.title}</h1>
        <img src={imgeUrl} />
    
    </div>)
}