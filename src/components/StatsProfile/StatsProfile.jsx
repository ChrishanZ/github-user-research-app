import styles from "./StatsProfile.module.scss";

function StatsProfile() {
  return (
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
  );
}

export default StatsProfile;
