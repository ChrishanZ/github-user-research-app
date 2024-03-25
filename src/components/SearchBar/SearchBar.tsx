import { useState } from "react";

import styles from "./SearchBar.module.scss";
import iconSearch from "/assets/icon-search.svg";

function SearchBar({
  searchUser,
  errorMessage,
}: {
  searchUser: (pseudo: string) => void;
  errorMessage: string;
}) {
  const [user, setUser] = useState("");

  return (
    <>
      <div className={`d-flex align-items-center ${styles.SearchBar}`}>
        <img src={iconSearch} alt="search" />
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchUser(user);
            }
          }}
        />
        <button
          onClick={() => {
            searchUser(user);
          }}
        >
          Search
        </button>
      </div>
      <p>{errorMessage}</p>
    </>
  );
}

export default SearchBar;
