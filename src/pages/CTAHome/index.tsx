import { HandshakeIcon, HomeIcon, MedalIcon } from "lucide-react";
import { Box } from "../../components/Box";
import { Heading } from "../../components/Heading";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import { CTATemplate } from "../../templates/CTATemplate";
import { ServiceCard } from "../../components/ServiceCard";
import { Paragraph } from "../../components/Paragraph";

export function CTAHome() {

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
  ];

  return (
    <CTATemplate

      headerChildren={
        <Box alignItems="center">
          <PrimaryButton href="/login/" text="LOGIN" />
          <SecondaryButton href="/register/" text="CADASTRE-SE" />
        </Box>
      }

      mainChildren={
        <>
          <Box flexDirection="column">
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
        </>
      }
    ></CTATemplate>
  );
}