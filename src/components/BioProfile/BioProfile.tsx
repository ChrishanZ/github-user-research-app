import styles from "./BioProfile.module.scss";

function BioProfile({ bio }: { bio: string }) {
  return <p className={styles.bio}>{bio ? bio : "This profile has no bio"}</p>;
}

export default BioProfile;
