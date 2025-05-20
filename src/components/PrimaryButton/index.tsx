import styles from "./styles.module.css";

type PrimaryButtonProps = {
  text: string;
};

export function PrimaryButton ({ text }: PrimaryButtonProps) {
  return (
    <button className={styles.primary}>{text}</button>
  );
}