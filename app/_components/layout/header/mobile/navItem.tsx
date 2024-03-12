import React from "react";
import ActiveLink from "../link";
import styles from "../Style.module.css";
import clsx from "clsx";

const MobileNavItem = ({
  title,
  href,
  icon,
  onClick,
}: {
  title: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
}) => {
  return (
    <li>
      {href ? (
        <ActiveLink activeClassName={styles["activeLinkMobile"]} href={href}>
          <span className="flex items-center py-4 text-black">
            <i className={clsx(icon, "pr-1 text-[1.8rem]")} />
            <span>{title}</span>
          </span>
        </ActiveLink>
      ) : (
        <span className="flex items-center py-5 text-black" onClick={onClick}>
          <i className={clsx(icon, "pr-1 text-[1.8rem]")} />
          <span>{title}</span>
        </span>
      )}
    </li>
  );
};

export default React.memo(MobileNavItem);
