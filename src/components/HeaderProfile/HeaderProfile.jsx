import styles from "./HeaderProfile.module.scss";

function HeaderProfile({ login, created_at }) {
  const date = new Date(created_at);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div
      className={`d-flex align-items-center justify-content-spacebetween ${styles.header}`}
    >
      <h2>{login}</h2>
      <h3>Joined {formattedDate}</h3>
    </div>
  );
}

export default HeaderProfile;
