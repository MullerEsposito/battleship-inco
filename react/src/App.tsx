import { ThemeProvider } from "styled-components"
import { PrivyProvider } from "@privy-io/react-auth"
import { createWeb3Modal } from '@web3modal/ethers5/react'

import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

import { privyConfig } from "./config/privy"
import { ethersConfig, mainnet, projectId } from "./config/wallet-connect"

createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId
});

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <PrivyProvider
        appId="clykky00i05ktu51j7y617car"
        config={privyConfig}
      >
        <Layout>
          <Home />
        </Layout>
        <GlobalStyle />
      </PrivyProvider>
    </ThemeProvider>
  )
}

export default App
