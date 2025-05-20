import styles from "./styles.module.css";

type SecondaryButtonProps = {
  text: string;
};

export function SecondaryButton ({ text }: SecondaryButtonProps) {
  return (
    <button className={styles.secondary}>{text}</button>
  );
}