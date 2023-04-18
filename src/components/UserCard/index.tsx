import React, { FC } from "react";
import styles from "./UserCard.module.scss";
import { UserInfo, UserStat, UserTitle } from "./components";
import { IGithubUser } from "../../types/user";

const UserCard: FC<IGithubUser> = (props) => {
  const {
    login,
    avatar_url,
    bio,
    created_at,
    name,
    public_repos,
    following,
    followers,
    blog,
    twitter_username,
    company,
    location,
  } = props;

  return (
    <div className={styles.userCard}>
      <img src={avatar_url} alt='' className={styles.avatar} />
      <UserTitle created_at={created_at} login={login} name={name} />
      <p>{bio && "There is not a bio"}</p>
      <UserStat
        public_repos={public_repos}
        followers={followers}
        following={following}
      />
      <UserInfo
        blog={blog}
        twitter_username={twitter_username}
        company={company}
        location={location}
      />
    </div>
  );
};

export default UserCard;
