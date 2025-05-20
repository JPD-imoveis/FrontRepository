import type { ReactNode } from "react";
import styles from "./styles.module.css";

type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {children}
      </div>
    </header>
  );
}