import "./App.css";

import data from "./assets/data.json";
import Picture from "./components/Picture/Picture";
import Thumbnail from "./components/Thumbnail/Thumbnail";

function App() {
  return (
    <div className="App">
      {data.map((obj) => {
        const { small, medium, large } = obj.thumbnail.regular;

        return (
          <Thumbnail small={small} medium={medium} large={large} isBookmarked />
        );
      })}
    </div>
  );
}

export default App;
