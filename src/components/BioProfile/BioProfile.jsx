import styles from "./BioProfile.module.scss";

function BioProfile({ bio }) {
  return <p className={styles.bio}>{bio ? bio : "This profile has no bio"}</p>;
}

export default BioProfile;
