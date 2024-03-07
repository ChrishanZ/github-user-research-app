import styles from "./Profile.module.scss";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import HrefProfile from "../HrefProfile/HrefProfile";
import BioProfile from "../BioProfile/BioProfile";
import StatsProfile from "../StatsProfile/StatsProfile";
import LinksProfile from "../LinksProfile/LinksProfile";

function Profile() {
  return (
    <div className={`d-flex ${styles.profile}`}>
      <div className={styles.image}></div>
      <div className={`d-flex flex-fill flex-column ${styles.content}`}>
        <HeaderProfile />
        <HrefProfile />
        <BioProfile />
        <StatsProfile />
        <LinksProfile />
      </div>
    </div>
  );
}

export default Profile;
