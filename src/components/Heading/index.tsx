import styles from "./styles.module.css";

import type { HeadingProps } from "../../types/HeadingProps";

export function Heading ({ text, textColor = "light", headingSize = "h1", weight = "bold" }: HeadingProps) {
  return (
    <h1 className={`${styles[headingSize]} ${styles[weight]} ${styles[textColor]}`}>{text}</h1>
  );
}