// Components
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { ReactComponent as TVIcon } from "../../assets/icon-category-tv.svg";
import Thumbnail from "../Thumbnail/Thumbnail";

// Styles
import "./Movie.css";

export default function Movie({ movie, forTrendingList }) {
  const { title, thumbnail, year, category, rating, isBookmarked } = movie;

  return (
    <div className="movie">
      <Thumbnail
        thumbnail={thumbnail}
        isBookmarked={isBookmarked}
        forTrendingList={forTrendingList}
      />

      <div className="movie__body">
        <div className="movie__details">
          <span className="movie__year">{year}</span>
          &bull;
          <span className="movie__category">
            {getCategoryIcon(category)}
            {category}
          </span>
          &bull;
          <span className="movie__year">{rating}</span>
        </div>
        <h3 className="movie__title">{title}</h3>
      </div>
    </div>
  );
}

function getCategoryIcon(category) {
  return category.toLowerCase() === "movie" ? <MovieIcon /> : <TVIcon />;
}
