// Components
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

// Styles
import "./Input.css";

export default function Input({ type, placeholder }) {
  type = type.toLowerCase();

  return (
    <>
      {type !== "search" && (
        <input
          className="input input--primary"
          type={type}
          placeholder={placeholder}
        />
      )}

      {type === "search" && (
        <div className="input-container">
          <SearchIcon />
          <input
            className="font-md input input--search"
            type="search"
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
}
