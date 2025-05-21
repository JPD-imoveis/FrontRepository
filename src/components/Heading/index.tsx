import styles from "./styles.module.css";

type HeadingProps = {
  text: string;
  textColor: "light" | "dark";
  headingSize?: "h1" | "h2" | "h3" | "h4" | "h5";
  weight?: "bold" | "regular";
}

export function Heading ({ text, textColor = "light", headingSize = "h1", weight = "bold" }: HeadingProps) {
  return (
    <h1 className={`${styles[headingSize]} ${styles[weight]} ${styles[textColor]}`}>{text}</h1>
  );
}