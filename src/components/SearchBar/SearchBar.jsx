import styles from "./SearchBar.module.scss";
import iconSearch from "../../../public/assets/icon-search.svg";

function SearchBar() {
  return (
    <div className={`d-flex align-items-center ${styles.SearchBar}`}>
      <img src={iconSearch} alt="search" />
      <input type="text" placeholder="Search GitHub username…" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
