import styles from "./HrefProfile.module.scss";

function HrefProfile({ login, html_url }: { login: string; html_url: string }) {
  return (
    <a href={html_url} target="_blank" className={styles.href}>
      {`@${login}`}
    </a>
  );
}

export default HrefProfile;
