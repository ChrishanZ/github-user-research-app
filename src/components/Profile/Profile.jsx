import styles from "./Profile.module.scss";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import HrefProfile from "../HrefProfile/HrefProfile";
import BioProfile from "../BioProfile/BioProfile";
import StatsProfile from "../StatsProfile/StatsProfile";
import LinksProfile from "../LinksProfile/LinksProfile";

function Profile({ data }) {
  console.log(data);
  const {
    avatar_url,
    login,
    created_at,
    html_url,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = data;
  return (
    <div className={`d-flex ${styles.profile}`}>
      <div className={styles.image}>
        <img src={avatar_url} alt="" />
      </div>
      <div className={`d-flex flex-fill flex-column ${styles.content}`}>
        <HeaderProfile login={login} created_at={created_at} />
        <HrefProfile login={login} html_url={html_url} />
        <BioProfile bio={bio} />
        <StatsProfile
          public_repos={public_repos}
          followers={followers}
          following={following}
        />
        <LinksProfile
          location={location}
          blog={blog}
          twitter_username={twitter_username}
          company={company}
        />
      </div>
    </div>
  );
}

export default Profile;
