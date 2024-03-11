import styles from "./LinksProfile.module.scss";
import iconLocation from "../../../public/assets/icon-location.svg";
import iconTwitter from "../../../public/assets/icon-twitter.svg";
import iconWebsite from "../../../public/assets/icon-website.svg";
import iconCompany from "../../../public/assets/icon-company.svg";

function LinksProfile({ location, twitter_username, blog, company }) {
  return (
    <ul className={styles.links}>
      <li className="d-flex align-items-center">
        <img src={iconLocation} alt="location" />
        {location ? location : "Not avaible"}
      </li>
      <li className="d-flex align-items-center">
        <img src={iconTwitter} alt="twitter" />
        {twitter_username ? (
          <a href={`https://twitter.com/${twitter_username}`}>
            {twitter_username}
          </a>
        ) : (
          "Not avaible"
        )}
      </li>
      <li className="d-flex align-items-center">
        <img src={iconWebsite} alt="blog" />
        {blog ? <a href={blog}>{blog}</a> : "Not avaible"}
      </li>
      <li className="d-flex align-items-center">
        <img src={iconCompany} alt="company" />
        {company ? company : "Not avaible"}
      </li>
    </ul>
  );
}

export default LinksProfile;
