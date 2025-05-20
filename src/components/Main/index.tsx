import type { ReactNode } from 'react';

import styles from './styles.module.css';

type MainProps = {
  children: ReactNode;
};

export function Main ({ children }: MainProps) {
  return (
    <main className={styles.mainContainer}>

      {children}

    </main>
  );
}