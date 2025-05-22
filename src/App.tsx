import { HandshakeIcon, HomeIcon, MedalIcon } from "lucide-react";
import { Box } from "./components/Box";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Main } from "./components/Main";
import { Paragraph } from "./components/Paragraph";
import { PrimaryButton } from "./components/PrimaryButton";
import { SecondaryButton } from "./components/SecondaryButton";
import { ServiceCard } from "./components/ServiceCard";

import "./styles/globals.css";
import "./styles/themes.css";

function App() {

  const services = [
    {
      title: "Venda seu imóvel",
      description: "Anuncie seu imóvel com autonomia ou com um corretor bem rankeado.",
      Icon: HomeIcon
    },
    {
      title: "Ranking de corretores",
      description: "Encontre corretores confiáveis baseados no nosso ranking mensal.",
      Icon: MedalIcon
    },
    {
      title: "Negociação transparente",
      description: "Agende visitas e negocie diretamente pelo sistema.",
      Icon: HandshakeIcon
    }
  ]

  return (
    <>
      <Header>
        <Logo />
        <Box>
          <PrimaryButton text="LOGIN" />
          <SecondaryButton text="CADASTRE-SE" />
        </Box>
      </Header>
      <Main>
        <Box displayDirection="column">
          <Heading
            text="A Plataforma Inteligente para Negociações Imobiliárias!"
            textColor="light"
          />
          <Heading
            text="Conectando compradores, vendedores e corretores de maneira eficiente e segura."
            textColor="light"
            headingSize="h3"
            weight="regular"
          />
        </Box>
        <Box>
          {
            services.map(({ title, description, Icon }, index) => {
              return (
                <ServiceCard
                  key={index}
                  Heading={
                    <Heading
                      headingSize="h4"
                      text={title}
                      textColor="light"
                    />
                  }
                  Paragraph={
                    <Paragraph 
                      text={description}
                      paragraphAlign="center"
                    />
                  }
                  Icon={
                    <Icon
                      size="64px" 
                      color="white"
                    />
                  }
                />
              );
            })
          }
        </Box>
      </Main>
    </>
  );
}

export default App
