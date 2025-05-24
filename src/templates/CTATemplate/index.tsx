import type { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Main } from "../../components/Main";

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
      <Main>
        {mainChildren}
      </Main>
    </>
  );
}