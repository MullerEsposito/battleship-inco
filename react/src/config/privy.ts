import { PrivyClientConfig } from "@privy-io/react-auth";
import battleshipLogo from "../assets/battleship-inco-logo.png";

export const privyConfig: PrivyClientConfig = {
  loginMethods: ['google', 'github', 'wallet'],
  // Customize Privy's appearance in your app
  appearance: {
    theme: 'dark',
    accentColor: '#676FFF',
    logo: battleshipLogo,
  },
  // Create embedded wallets for users who don't have a wallet
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
  },
}