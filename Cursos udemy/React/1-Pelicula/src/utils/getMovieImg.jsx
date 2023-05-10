export function getMovieImg(path, size) {
    return path? `https://image.tmdb.org/t/p/w${size}${path}`: "https://via.placeholder.com/300x450?text=No+Image";
}

