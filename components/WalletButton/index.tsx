// /components/WalletButton/index.tsx
'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const WalletButton = () => {
  const { connected } = useWallet();

  return (
    <div className="wallet-button-container">
      {connected && <div className="wallet-status">Wallet Connected:</div>}
      <WalletMultiButton />
    </div>
  );
};