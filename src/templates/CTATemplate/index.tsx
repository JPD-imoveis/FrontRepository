import type { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Main } from "../../components/Main";
import { Paragraph } from "../../components/Paragraph";

type CTATemplateProps = {
  headerChildren: ReactNode;
  mainChildren: ReactNode;
}

export function CTATemplate({ headerChildren, mainChildren }: CTATemplateProps) {
  return (
    <>
      <Header>
        <Logo />
        {headerChildren}
      </Header>
      <Main flexDirection="column">
        {mainChildren}
        <Paragraph
            text="© 2025 ImobiConnect. Todos os direitos reservados."
            paragraphAlign="center"
            weight="regular"
            textColor="light"
          />
      </Main>
    </>
  );
}