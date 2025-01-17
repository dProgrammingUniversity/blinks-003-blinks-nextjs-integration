// /app/page.tsx
'use client';

import '@solana/wallet-adapter-react-ui/styles.css';  // Import wallet adapter styles
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { BlinkComponent } from '@/components/Blinks';
import { WalletButton } from '@/components/WalletButton';
// Import wallet adapters
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  // Add other wallet adapters as needed
} from '@solana/wallet-adapter-wallets';



export default function Home() {
  // Set up the Solana endpoint
  const endpoint = useMemo(() => clusterApiUrl('mainnet-beta'), []);

  // Initialize wallet adapters
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      // Add other wallet adapters as needed
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletButton />
          <BlinkComponent />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
