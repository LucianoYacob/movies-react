import { MovieCard } from "./MovieCard";
// Al exportar sin default, al cambiarle el nombre a la funcion me permitira cambiar el nombre donde sea q se llame
import styles from "../styles/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";
import { useInfiniteQuery } from "react-query";
import { useMovies } from "../hooks/useMovies";

export function MoviesGrid({ search }) {
  const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies(search);

  // const moviesState = useState([]);
  // const movies = moviesState[0];
  // const setMovies = moviesState[1];

  // Destructuracion
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);

  // // UseEffect se ejecuta como efecto secundario, no a partir de la funcion principal, para q no la afecte, esto sirve para hacer llamadas a APIs
  // // Es ejecutada una vez el componente se haya cargado en el DOM
  // useEffect(() => {
  //   setIsLoading(true);
  //   const searchUrl = search
  //     ? "/search/movie?query=" + search + "&page=" + page
  //     : "/discover/movie?page=" + page;
  //   get(searchUrl).then((data) => {
  //     setMovies(prevMovies => prevMovies.concat(data.results));
  //     setHasMore(data.page < data.total_pages);
  //     setIsLoading(false);
  //   });
  // }, [search, page]);
  // El ultimo arreglo (arreglo de dependencias), en este caso vacio, le digo al efecto q se ejecute por una unica vez al cargarse el componente y luego no se ejecute mas, es para evitar que se haga una llamada constante al componente cada q se cambie el estado

  if(!isLoading && movies.length === 0){
    return <Empty />
  }

  // Siempre q se cambie el estado a partir del estado anterior, usamos una funcion dentro del setState donde reciba el estado anterior y modifique ese, osea no hacer state + 1, sino hace como en la prop next...
  // El parametro q recibe de esa funcion interna es el estado q esta ligado a esa misma funcion
  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasNextPage | isLoading}
      next={() => fetchNextPage()}
      loader={ <Spinner /> }
      >
      <ul className={styles.moviesGrid}>
        {/* map agarras un array y por cada propiedad u objeto lo transformas en otra cosa, nosotros qremos en este caso transformar cada objeto en una etiqueta <li></li> */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

/* ctrl + shift + p -> debug: open link -> pongo el enlace de servidor local, y podre debuggear el codigo en un navegador aparte para verificar errores o correr linea por linea el codigo */