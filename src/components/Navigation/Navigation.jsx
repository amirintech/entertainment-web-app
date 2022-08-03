// Components
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TVIcon } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/icon-nav-bookmark.svg";
import userImage from "../../assets/image-avatar.png";

// Styles
import "./Navigations.css";

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <LogoIcon />
        </Link>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              <HomeIcon />
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="movies" className="nav__link">
              <MovieIcon />
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="tv-series" className="nav__link">
              <TVIcon />
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="bookmark" className="nav__link">
              <BookmarkIcon />
            </NavLink>
          </li>
        </ul>

        <img className="nav__user-image" src={userImage} alt="user image" />
      </nav>
    </div>
  );
}
