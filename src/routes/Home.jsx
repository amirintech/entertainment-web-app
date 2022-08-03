import data from "../assets/data.json";
import List from "../components/List/List";

export default function Home() {
  const trendingMovies = data.filter((movie) => movie.isTrending);
  const recommendedMovies = data.filter((movie) => !movie.isTrending);

  return (
    <div className="page">
      <List title="Trending" movies={trendingMovies} trendingList />
      <List title="Recommended for you" movies={recommendedMovies} />
    </div>
  );
}
