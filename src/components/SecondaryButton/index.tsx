import type { ButtonProps } from "../../types/ButtonProps";

import styles from "./styles.module.css";

export function SecondaryButton ({ text, width }: ButtonProps) {
  const widthStyle: React.CSSProperties = {
    width: width
  }

  return (
    <button style={widthStyle} className={styles.secondary}>{text}</button>
  );
}