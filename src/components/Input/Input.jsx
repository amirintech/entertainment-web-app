// Components
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

// Styles
import "./Input.css";

export default function Input({ type, placeholder, value, onChange }) {
  type = type.toLowerCase();

  return (
    <>
      {type !== "search" && (
        <input
          className="input input--primary"
          type={type}
          placeholder={placeholder}
          value={value}
        />
      )}

      {type === "search" && (
        <div className="input-container">
          <SearchIcon className="input--icon" />
          <input
            className="input input--search"
            type="search"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
}
