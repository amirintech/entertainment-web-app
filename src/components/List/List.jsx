// Components
import data from "../../assets/data.json";
import Movie from "../Movie/Movie";

// Styles
import "./List.css";

export default function List({ list, title, trendingList, filterFunction }) {
  let media = list ?? data;
  if (filterFunction) media = media.filter(filterFunction);

  return (
    <div className="list-container">
      <h2 className="list-title">{title}</h2>
      <div
        className={"list " + (trendingList ? "trending-list" : "movies-list")}
      >
        {media.map((movie) => (
          <Movie
            key={movie.title}
            movie={movie}
            forTrendingList={trendingList}
          />
        ))}
      </div>
    </div>
  );
}
