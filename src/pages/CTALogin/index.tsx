import { Box } from "../../components/Box";
import { Heading } from "../../components/Heading";
import { LoginForm } from "../../components/LoginForm";
import { Main } from "../../components/Main";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import { CTATemplate } from "../../templates/CTATemplate";

export function CTALogin() {
  return (

    <CTATemplate

      headerChildren={
        <Box alignItems="center">
          <PrimaryButton text="LOGIN" />
          <SecondaryButton text="CADASTRE-SE" />
        </Box>
      }

      mainChildren={
        <>
          <Main>
            <Box flexDirection="column" alignItems="left">
              <Heading
                text="Seja um vendedor e anuncie com a gente!"
                textColor="light"
              />
              <Heading
                text="Seus anúncios impulsionados, rank de corretores e muito mais!"
                textColor="light"
                weight="regular"
                headingSize="h4"
              />
            </Box>
            <Box>
              <LoginForm />
            </Box>
          </Main>
        </>
      }>

    </CTATemplate>

  );
}