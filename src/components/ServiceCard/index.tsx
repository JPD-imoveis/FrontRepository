import type { ServiceCardProps } from "../../types/ServiceCardProps";
import { Box } from "../Box";

import styles from "./styles.module.css";

export function ServiceCard({ Heading, Paragraph, Icon }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      
        <Box flexDirection="column" alignItems="center">
          {Icon}
          {Heading}
          {Paragraph}
        </Box>
      
    </div>
  );
}