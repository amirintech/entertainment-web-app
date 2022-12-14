// Components
import Picture from "../Picture/Picture";
import { ReactComponent as BookmarkEmptyIcon } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFullIcon } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as PlayIcon } from "../../assets/icon-play.svg";

// Styles
import "./Thumbnail.css";

export default function Thumbnail({
  thumbnail,
  isBookmarked,
  forTrendingList,
}) {
  const images = forTrendingList ? thumbnail.trending : thumbnail.regular;
  const { small, large } = images;
  const medium = images?.medium;

  return (
    <figure className="thumbnail">
      <div className="bookmark-btn">
        {isBookmarked ? (
          <BookmarkFullIcon className="bookmark-full-icon" />
        ) : (
          <BookmarkEmptyIcon className="bookmark-empty-icon" />
        )}
      </div>

      <Picture small={small} medium={medium} large={large} alt="movie" />

      <button className="play-btn">
        <PlayIcon className="play-btn__icon" />
        <span className="font-xsm play-btn__text">Play</span>
      </button>
    </figure>
  );
}
