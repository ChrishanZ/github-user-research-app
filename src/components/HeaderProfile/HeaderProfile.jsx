import styles from "./HeaderProfile.module.scss";

function HeaderProfile() {
  return (
    <div
      className={`d-flex align-items-center justify-content-spacebetween ${styles.header}`}
    >
      <h2>The Octocat</h2>
      <h3>Joined 25 Jan 2011</h3>
    </div>
  );
}

export default HeaderProfile;
