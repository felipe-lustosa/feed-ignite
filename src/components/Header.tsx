import React from "react";
import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

type Props = {};

function Header({}: Props) {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
    </div>
  );
}

export default Header;
