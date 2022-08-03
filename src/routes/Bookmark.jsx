import data from "../assets/data.json";
import List from "../components/List/List";

export default function Bookmark() {
  const bookmarkedMovies = data.filter(
    (media) =>
      media.isBookmarked && media.category.toLocaleLowerCase() === "movie"
  );

  const bookmarkedTVSeries = data.filter(
    (media) =>
      media.isBookmarked && media.category.toLocaleLowerCase() === "tv series"
  );

  return (
    <div className="bookmark">
      <List title="Bookmarked Movies" movies={bookmarkedMovies} />
      <List title="Bookmarked TV Series" movies={bookmarkedTVSeries} />
    </div>
  );
}
