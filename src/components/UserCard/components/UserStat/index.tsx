import React, { FC } from "react";
import styles from "./UserStat.module.scss";
import { IGithubUser } from "../../../../types/user";

type PickedData = Pick<IGithubUser, "public_repos" | "followers" | "following">;

const UserStat: FC<PickedData> = ({
  public_repos: repo,
  followers,
  following,
}) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{repo}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};

export default UserStat;
