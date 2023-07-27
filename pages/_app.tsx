import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import type { Metadata } from 'next'

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  polygonMumbai
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import NavBar from '../src/components/NavBar';

export const metadata: Metadata = {
  title: 'Giakaa Assignment',
  description: 'Generated by create next app',
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Giakaa Assignment',
  projectId: '8a828f19acfdae048ba0f11ed8530724',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <NavBar />
        <Component />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
