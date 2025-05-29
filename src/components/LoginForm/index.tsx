import { FormInput } from "../FormInput";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";

import styles from "./styles.module.css";

export function LoginForm () {
  return (
    <form>
      <div className={styles.formContainer}>
        <div className={styles.formRow}>
          <FormInput 
            id="email"
            type="email"
            labelText="E-mail:"
            placeholderText="Digite seu email"
          />
        </div>
        <div className={styles.formRow}>
          <FormInput 
            id="password"
            type="password"
            labelText="Senha:"
            placeholderText="Digite sua senha"
          />
        </div>
        <div className={styles.formRow}>
          <PrimaryButton 
            text="Login"
            width="506px"
          />
        </div>
        <div className={styles.formRow}>
          <a href="/">Não tem uma conta?</a>
        </div>
        <div className={styles.formRow}>
          <SecondaryButton 
            text="Cadastrar-se"
            width="506px"
          />
        </div>
      </div>
    </form>
  );
}