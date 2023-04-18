import React, { FC } from "react";
import styles from "./Header.module.scss";
import ThemeSwitcher from "../ThemeSwitcher";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Github User Finder</div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
