import React, { FC } from "react";
import styles from "./UserTitle.module.scss";
import { IGithubUser } from "../../../../types/user";

type PickedData = Pick<IGithubUser, "created_at" | "login" | "name">;
const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const UserTitle: FC<PickedData> = ({ created_at, name, login }) => {
  const joinedDay = localDate.format(new Date(created_at));
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDay}</span>
    </div>
  );
};

export default UserTitle;
