import type { ReactNode } from "react";

import styles from "./styles.module.css";

type BoxProps = {
  children: ReactNode;
  flexDirection?: "column" | "row";
  alignItems?: "center" | "left";
};

export function Box ({ children, flexDirection = "row", alignItems = "left" }: BoxProps) {
  const flexConfig: React.CSSProperties = {
    flexDirection,
    alignItems,
  };

  return (
    <div className={`${styles.box}`} style={flexConfig}>
      {children}
    </div>
  );
}