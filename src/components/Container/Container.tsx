import { useState, SetStateAction, Dispatch } from "react";

import axios from "axios";

import styles from "./Container.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Profile/Profile";

import sun from "/assets/icon-sun.svg";
import moon from "/assets/icon-moon.svg";

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
  // Add other properties as needed
}

function Container({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) {
  const [data, setData]: [
    IData | null,
    Dispatch<SetStateAction<IData | null>>
  ] = useState<IData | null>(null);

  const [isLoading, setIsLoading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const [errorMessage, setErrorMessage]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

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
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>devfinder</h1>
        <div
          className={`d-flex align-items-center ${styles.colormode}`}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          <span>{isDarkMode ? "LIGHT" : "DARK"}</span>
          <img src={isDarkMode ? sun : moon} alt="colormode" />
        </div>
      </div>
      <SearchBar searchUser={searchUser} errorMessage={errorMessage} />
      {isLoading ? (
        <div
          className={`d-flex justify-content-center align-items-center ${styles.containerLoader}`}
        >
          <span className={styles.loader}></span>
        </div>
      ) : (
        data && <Profile data={data} />
      )}
    </div>
  );
}

export default Container;
