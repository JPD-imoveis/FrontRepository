import styles from "./styles.module.css";

import type { ParagraphProps } from "../../types/ParagraphProps";

export function Paragraph ({ text, textColor = "light", weight = "regular", paragraphAlign }: ParagraphProps) {
  return (
    <p className={`${styles[textColor]} ${styles[weight]} ${styles[paragraphAlign]}`}>{text}</p>
  )
}