import dynamic from "next/dynamic";
import { useAccount } from "wagmi";
const Account = dynamic(() => import("@/components/acount"), {
  ssr: false,
});
const WalletOptions = dynamic(() => import("@/components/wallet-option"), {
  ssr: false,
});
function ConnectWallet() {
  const { isConnected } = useAccount();
  console.log({ isConnected });
  if (isConnected) return <Account />;
  return <WalletOptions />;
}
export default function Home() {
  return <ConnectWallet />;
}
