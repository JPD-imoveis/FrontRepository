import type { ReactNode } from "react";

import styles from "./styles.module.css";

type BoxProps = {
  children: ReactNode;
  displayDirection?: "column" | "row";
};

export function Box ({ children, displayDirection = "row" }: BoxProps) {
  return (
    <div className={`${styles.box} ${styles[displayDirection]}`}>
      {children}
    </div>
  );
}