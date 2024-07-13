import { ThemeProvider } from "styled-components"
import { Layout } from "./components/Layout"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"
import { PrivyProvider } from "@privy-io/react-auth"

import { privyConfig } from "./config/privy"


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
