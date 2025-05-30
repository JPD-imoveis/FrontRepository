import type { ButtonProps } from "../../types/ButtonProps";
import { RouterLink } from "../RouterLink";

import styles from "./styles.module.css";

export function PrimaryButton ({ text, width, href = "" }: ButtonProps) {
  const widthStyle: React.CSSProperties = {
    width: width,
  }

  return (
    <RouterLink href={href}>
      <button style={widthStyle} className={styles.primary}>{text}</button>
    </RouterLink>
  );
}