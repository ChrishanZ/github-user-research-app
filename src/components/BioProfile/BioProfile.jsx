function BioProfile({ bio }) {
  return <p>{bio ? bio : "This profile has no bio"}</p>;
}

export default BioProfile;
