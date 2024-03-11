import { useState } from "react";
import axios from "axios";

import styles from "./SearchBar.module.scss";
import iconSearch from "../../../public/assets/icon-search.svg";

function SearchBar({ setData }) {
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const searchUser = (pseudo) => {
    axios
      .get(`https://api.github.com/users/${pseudo}`)
      .then((response) => {
        setData(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setData(null);
      });
  };

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
            console.log(e.target.value);
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
