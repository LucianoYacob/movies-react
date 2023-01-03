// La manera correcta de implementar estilos es atraves de modulos CSS asi no se generan de manera global en el head del DOM, como si lo harian con archivos independientes de css. La manera es implementar un archivo CSS con la palabra "module" e importarlo como si fuese un objeto, luego al elemento q le qremos poner estilos simplemente llamamos a ese objeto de estilos (styles en este caso), y con notacion de punto accedemos a la clase del archivo CSS que le correspondera a ese elemento. Esto nos perimitira crear clases UNICAS por componentes de manera automatica.
import styles from "../styles/MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMoviePoster } from "../utils/getMoviePoster";

export function MovieCard({ movie }) {
  const imageUrl = getMoviePoster(movie.poster_path, 300);

  return (
    <li className={styles.movieCard}>
      {/* Si yo reservo el espacio de las imagenes al cargar la pagina no se vera como los textos se desplazan */}
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
