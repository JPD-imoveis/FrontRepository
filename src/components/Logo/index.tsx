import logoImg from "../../assets/images/blue-logo.png"

import styles from "./styles.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoImg} alt="logo" />
      <h4>ImobiConnect</h4>
    </div>
  )
}