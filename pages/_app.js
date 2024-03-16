import '@/styles/globals.css'
import {
  createConfig,
  http,
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  usePublicClient,
  useSwitchChain,
  useWalletClient,
  WagmiProvider,
} from "wagmi";
import { sepolia, mainnet, arbitrum, arbitrumSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  injected,
  metaMask,
  coinbaseWallet,
  safe,
  walletConnect,
} from "wagmi/connectors";
const config = createConfig({
  chains: [mainnet, sepolia, arbitrum, arbitrumSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId: "5f3d3b2e74be262d11cfdd7d0b9dac10",
      showQrModal: true,
    }),
  ],
});

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
