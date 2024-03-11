import { useState } from "react";

import styles from "./Container.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Profile/Profile";

function Container() {
  const [data, setData] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>devfinder</h1>
      </div>
      <SearchBar data={data} setData={setData} />
      {data && <Profile data={data} />}
    </div>
  );
}

export default Container;
