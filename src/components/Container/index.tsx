import React, { FC, ReactNode } from "react";
import styles from "./Container.module.scss";
import Header from "../Header";

interface IContainerProps {
  children: ReactNode;
}
const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
