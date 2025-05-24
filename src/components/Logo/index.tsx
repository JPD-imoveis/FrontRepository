import logoImg from "../../assets/images/blue-logo.png"
import { Heading } from "../Heading";

import styles from "./styles.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoImg} alt="logo" />
      <Heading 
        text="ImobiConnect"
        textColor="dark"
        headingSize="h4"
        weight="regular"
      />
    </div>
  );
}