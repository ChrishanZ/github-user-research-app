import { useState, SetStateAction, Dispatch } from "react";

import styles from "./Container.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Profile/Profile";

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
function Container() {
  const [data, setData]: [
    IData | null,
    Dispatch<SetStateAction<IData | null>>
  ] = useState<IData | null>(null);

  const [isLoading, setIsLoading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>devfinder</h1>
      </div>
      <SearchBar setData={setData} setIsLoading={setIsLoading} />
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
