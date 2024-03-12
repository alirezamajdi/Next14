import React, { useState } from "react";
import ActiveLink from "../link";
import styles from "../Style.module.css";
import { useWindowSize } from "usehooks-ts";
import clsx from "clsx";
import { GrDown } from "react-icons/gr";

const PricingLink = () => {
  const [showPriceList, setShowPriceList] = useState<boolean>(false);
  const { width } = useWindowSize();
  const handleChange = () => {
    if (width < 768) setShowPriceList((old) => !old);
  };

  return (
    <li className={clsx(styles["group-list"])}>
      <div
        className="flex cursor-pointer items-center justify-between py-4 md:py-0"
        onClick={handleChange}
      >
        <span
          className={`flex items-center pr-1 font-medium capitalize
          text-black md:py-[2.2rem] md:text-[1.2rem] lg:text-[1.4rem] xl:py-[2.8rem] xl:text-[1.6rem]`}
        >
          <i className="apollon-Price pr-1 text-[1.8rem] md:hidden" />
          Pricing
        </span>
        <span>
          <GrDown
            color={"#636464"}
            className={clsx(
              "duration-300",
              showPriceList ? "rotate-180" : "rotate-0"
            )}
          />
        </span>
      </div>
      <ul
        className={clsx(
          showPriceList && styles["active-group-list"],
          "border-card"
        )}
      >
        <li>
          <ActiveLink
            href="/pricing-landlords"
            activeClassName={styles["activeGroupLink"]}
          >
            <span className="capitalize">Landlords & estate agents</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/pricing-tenants"
            activeClassName={styles["activeGroupLink"]}
          >
            <span className="capitalize">Tenants</span>
          </ActiveLink>
        </li>
      </ul>
    </li>
  );
};

export default React.memo(PricingLink);
