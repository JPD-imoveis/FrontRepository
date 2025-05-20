import type { ReactNode } from "react";

import styles from "./styles.module.css";

type BoxProps = {
  children: ReactNode;
};

export function Box ({ children }: BoxProps) {
  return (
    <div className={styles.box}>
      {children}
    </div>
  )
}