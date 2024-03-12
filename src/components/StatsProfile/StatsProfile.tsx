import styles from "./StatsProfile.module.scss";

function StatsProfile({
  public_repos,
  followers,
  following,
}: {
  public_repos: number;
  followers: number;
  following: number;
}) {
  return (
    <div className={`d-flex align-items-center ${styles.stats}`}>
      <div className={styles.stat}>
        <h4>Repos</h4>
        <h5>{public_repos}</h5>
      </div>
      <div className={styles.stat}>
        <h4>Followers</h4>
        <h5>{followers}</h5>
      </div>
      <div className={styles.stat}>
        <h4>Following</h4>
        <h5>{following}</h5>
      </div>
    </div>
  );
}

export default StatsProfile;
