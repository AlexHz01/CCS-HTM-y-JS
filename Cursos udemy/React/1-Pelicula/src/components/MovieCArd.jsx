import {Link} from "react-router-dom";

export function MovieCard({peli}) {

    const imageUrl = "https://image.tmdb.org/t/p/w500"+peli.poster_path;
    
    return <li>
        <Link to={"/movies/"+peli.id}>
            <img width={230} height={345} src={imageUrl} alt={peli.title}/>
            <div>{peli.title}</div>
        </Link>

    </li> 

}