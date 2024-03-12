import styles from "./HeaderProfile.module.scss";

interface IOption {
  day?: "numeric" | undefined;
  month?: "long" | undefined;
  year?: "numeric" | undefined;
}

function HeaderProfile({
  login,
  created_at,
  avatar_url,
  html_url,
}: {
  login: string;
  created_at: string;
  avatar_url: string;
  html_url: string;
}) {
  const date = new Date(created_at);

  const options: IOption = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={avatar_url} alt="github avatar" />
      </div>
      <div
        className={`d-flex align-items-center justify-content-spacebetween ${styles.header}`}
      >
        <h2>{login}</h2>
        <h3>Joined {formattedDate}</h3>
        <a href={html_url} target="_blank" className={styles.href}>
          {`@${login}`}
        </a>
      </div>
    </div>
  );
}

export default HeaderProfile;
