import React, { FC, useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import IconMoon from "../../assets/icon-moon.svg";
import IconSun from "../../assets/icon-sun.svg";

const ThemeSwitcher: FC = () => {
  const [isDark, setIsDark] = useState(false);
  const themeIcon = isDark ? IconSun : IconMoon;
  const themeText = isDark ? "Light" : "Dark";
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <img src={themeIcon} alt='' className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
