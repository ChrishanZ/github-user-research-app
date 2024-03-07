import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className={`d-flex ${styles.profile}`}>
      <div className={styles.image}></div>
      <div className={`d-flex flex-fill flex-column ${styles.content}`}>
        <div
          className={`d-flex align-items-center justify-content-spacebetween ${styles.header}`}
        >
          <h2>The Octocat</h2>
          <h3>Joined 25 Jan 2011</h3>
        </div>
        <a href="google.fr" target="_blank">
          @octocat
        </a>
        <p>This profile has no bio</p>
        <div className={`d-flex align-items-center ${styles.stats}`}>
          <div className={styles.stat}>
            <h4>Repos</h4>
            <h5>8</h5>
          </div>
          <div className={styles.stat}>
            <h4>Repos</h4>
            <h5>8</h5>
          </div>
          <div className={styles.stat}>
            <h4>Repos</h4>
            <h5>8</h5>
          </div>
        </div>
        <ul className={styles.links}>
          <li>
            <img src="" alt="" />
            San Francisco
          </li>
          <li>
            <img src="" alt="" />
            https://github.blog
          </li>
          <li>
            <img src="" alt="" />
            Not Available
          </li>
          <li>
            <img src="" alt="" />
            @github
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
