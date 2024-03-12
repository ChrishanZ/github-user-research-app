import { useState, SetStateAction, Dispatch } from "react";
import axios from "axios";

import styles from "./SearchBar.module.scss";
import iconSearch from "/assets/icon-search.svg";

interface IData {
  avatar_url: string;
  login: string;
  created_at: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
}

function SearchBar({
  setData,
  setIsLoading,
}: {
  setData: Dispatch<SetStateAction<IData | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const searchUser = (pseudo: string) => {
    axios
      .get(`https://api.github.com/users/${pseudo}`)
      .then((response) => {
        setIsLoading(true);
        setData(response.data);
        setErrorMessage("");
        setIsLoading(false);
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
