import styles from "../styles/MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../Components/Spinner";
import { getMoviePoster } from "../utils/getMoviePoster";
import { useQuery } from "react-query";

export function MovieDetails() {
    const { movieId } = useParams();

    const {data: movie, isLoading} = useQuery(["movieDetails", movieId], () => get("/movie/" + movieId) );
    // const [isLoading, setIsLoading] = useState(true);
    // const [movie, setMovie] = useState(null);

    // useEffect(() => {
    //     setIsLoading(true);
    //     get("/movie/" + movieId).then(data => {
    //       setMovie(data);
    //       setIsLoading(false);
    //     });
    // }, [movieId]);
    //En este caso la dependencia sera del movieId cuando cambie este, el efecto se volvera a ejecutar, el efecto dependera del valor de movieId.
    
    if(isLoading){
      return <Spinner />
    }
    
  const imageUrl = getMoviePoster(movie.poster_path, 500);

  return (
    <div className={`${styles.detailsContainer} ${styles.movieDetails}`}>
      <img className={`${styles.col} ${styles.moviImage}`} src={imageUrl} alt={movie.title} />
      <div className={styles.col}>
        <p className={styles.firstItem}>
          <strong>Title: </strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(" - ")}
        </p>
        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
