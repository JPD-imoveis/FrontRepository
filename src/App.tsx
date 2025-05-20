import { Box } from "./components/Box";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Main } from "./components/Main";
import { PrimaryButton } from "./components/PrimaryButton";
import { SecondaryButton } from "./components/SecondaryButton";

import "./styles/globals.css";
import "./styles/themes.css";

function App() {

  return (
    <>
      <Header>
        <Logo />
        <Box>
          <PrimaryButton text="LOGIN" />
          <SecondaryButton text="REGISTRAR-SE"/>
        </Box>
      </Header>
      <Main>
        aaa
      </Main>
    </>
  )
}

export default App
