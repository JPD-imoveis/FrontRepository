import { Box } from "../../components/Box";
import { Heading } from "../../components/Heading";
import { Link } from "../../components/Link";
import { Main } from "../../components/Main";
import { CTATemplate } from "../../templates/CTATemplate";

export function CTARegister() {
  return (
    <CTATemplate
      headerChildren={<Box alignItems="center">
        <Link 
          text="Comprador"
          href="/buyer/"
          textColor="dark"
        />
        <Link 
          text="Vendedor"
          href="/buyer/"
          textColor="dark"
        />
        <Link 
          text="Corretor"
          href="/buyer/"
          textColor="dark"
        />
        <Link 
          text="Imobiliária"
          href="/buyer/"
          textColor="dark"
        />
      </Box>}
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
              <Heading 
                text="Form aqui"
                textColor="light"
              />
            </Box>
          </Main>
        </>
      }>

    </CTATemplate>
  )
}