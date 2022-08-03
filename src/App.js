// Libraries
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import Navigation from "./components/Navigation/Navigation";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import data from "./assets/data.json";

// Styles
import "./App.css";

function App() {
  const [movies, setMovies] = useState(data);
  const [searchString, setSearchString] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLocaleLowerCase().includes(searchString)
      )
    );
  }, [searchString, movies]);

  const getSearchString = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="app">
        <Navigation />

        <div className="app__content">
          <Input
            type="search"
            placeholder="Search for movies or TV series"
            value={searchString}
            onChange={getSearchString}
            className="app__search-input"
          />

          {searchString && (
            <List
              title={`Found ${filteredMovies.length} results for '${searchString}'`}
              list={filteredMovies}
            />
          )}

          {!searchString && <Outlet />}
        </div>
      </div>
    </>
  );
}

export default App;
