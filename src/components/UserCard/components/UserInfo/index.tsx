import React, { FC } from "react";
import styles from "./UserInfo.module.scss";
import { IGithubUser } from "../../../../types/user";
import IconLocation from "../../../../assets/icon-location.svg";
import IconCompany from "../../../../assets/icon-company.svg";
import IconTwitter from "../../../../assets/icon-twitter.svg";
import IconBlog from "../../../../assets/icon-website.svg";
import InfoItem from "../InfoItem";

type UserInfoProps = Pick<
  IGithubUser,
  "blog" | "company" | "twitter_username" | "location"
>;

// type SthProps = {
//   blog: string;
//   company: string | null;
//   twitter_username: string | null;
//   location: string;
// };

const UserInfo: FC<UserInfoProps> = ({
  blog,
  location,
  twitter_username,
  company,
}) => {
  const items = [
    { id: 1, icon: IconLocation, text: location },
    { id: 2, icon: IconBlog, text: blog },
    { id: 3, icon: IconTwitter, text: twitter_username },
    { id: 4, icon: IconCompany, text: company },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item) => {
        return <InfoItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default UserInfo;
