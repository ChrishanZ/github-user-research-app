import styles from "./Container.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Profile/Profile";

function Container() {
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
