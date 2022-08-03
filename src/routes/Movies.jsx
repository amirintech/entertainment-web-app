import data from "../assets/data.json";
import List from "../components/List/List";

export default function Movies() {
  const movies = data.filter(
    (movie) => movie.category.toLocaleLowerCase() === "movie"
  );

  return (
    <div className="movies">
      <List title="Movies" movies={movies} />
    </div>
  );
}
