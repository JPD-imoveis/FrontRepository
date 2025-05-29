import type { ReactNode } from 'react';

import styles from './styles.module.css';

type MainProps = {
  children: ReactNode;
  flexDirection?: "column" | "row";
  justifyContent?: "center" | "space-around" | "space-between";
};

export function Main ({ children, flexDirection = "row", justifyContent = "space-between"}: MainProps) {
  const flexConfig: React.CSSProperties = {
    flexDirection,
    justifyContent
  };

  return (
    <main style={flexConfig} className={styles.mainContainer}>

      {children}

    </main>
  );
}