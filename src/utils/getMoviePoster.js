import placeholder from "../placeholder.png";

export function getMoviePoster(path, width) {
    return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : placeholder;
}