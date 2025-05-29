import type { FormInputProps } from "../../types/FormInputProps";

import styles from "./styles.module.css";

export function FormInput ({ id, labelText, labelColor = "light", placeholderText, ...rest }: FormInputProps) {
  return (
    <>
      <div className={styles.inputContainer}>
        <label className={styles[labelColor]} htmlFor={id}>{labelText}</label>
        <input placeholder={`${placeholderText}`} id={id} {...rest} />
      </div>
    </>
  );
}