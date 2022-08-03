// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import App from "./App";

// Styles
import "./index.css";
import "normalize.css";
import List from "./components/List/List";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Home */}
          <Route
            index
            element={
              <>
                <List
                  title="Trending"
                  trendingList
                  filterFunction={(media) => media.isTrending}
                />

                <List
                  title="Recommended for you"
                  filterFunction={(media) => !media.isTrending}
                />
              </>
            }
          />

          {/* Movies */}
          <Route
            path="movies"
            element={
              <List
                title="Movies"
                filterFunction={(media) => media.category === "Movie"}
              />
            }
          />

          {/* TV Series Route */}
          <Route
            path="tv-series"
            element={
              <List
                title="TV Series"
                filterFunction={(media) => media.category === "TV Series"}
              />
            }
          />

          {/* Bookmarks Route */}
          <Route
            path="bookmark"
            element={
              <>
                <List
                  title="Bookmarked Movies"
                  filterFunction={(media) =>
                    media.category === "Movie" && media.isBookmarked
                  }
                />

                <List
                  title="Bookmarked TV Series"
                  filterFunction={(media) =>
                    media.category === "TV Series" && media.isBookmarked
                  }
                />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
