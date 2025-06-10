import { RouterLink } from "../RouterLink";

import styles from "./styles.module.css";

type LinkProps = {
  href: string;
  text: string;
  textColor: "dark" | "light";
};

export function Link ({ href, text, textColor }: LinkProps) {
  return (
    <RouterLink href={href}>
      <a className={`${styles[textColor]} ${styles.link}`}>{text}</a>
    </RouterLink>
  );
}