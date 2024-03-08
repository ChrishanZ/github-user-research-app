import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Container.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Profile/Profile";

function Container() {
  const [data, setData] = useState(null);

  const octokit = new Octokit({
    auth: "YOUR-TOKEN",
  });

  useEffect(() => {
    axios
      .get()
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>devfinder</h1>
      </div>
      <SearchBar />
      <Profile />
    </div>
  );
}

export default Container;
