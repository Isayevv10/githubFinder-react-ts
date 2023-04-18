import React, { FC } from "react";
import styles from "./InfoItem.module.scss";

interface IInfoItem {
  icon: string | undefined;
  text?: string | null;
  isLink?: boolean;
}

const InfoItem: FC<IInfoItem> = ({ icon, text, isLink }) => {
  let currenText = text ? text : "Not Available";
  let currentHref = "";

  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div className={styles.infoItem}>
      <img src={icon} alt='' />
      <div>
        {isLink ? (
          <a href={currentHref} target='_blank'>
            {currenText}
          </a>
        ) : (
          currenText
        )}
      </div>
    </div>
  );
};

export default InfoItem;
