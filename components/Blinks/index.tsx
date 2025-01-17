// /components/Blinks/index.tsx
'use client';

import '@dialectlabs/blinks/index.css'; // Import Blink styles
import {Blink, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import { useEffect, useState } from 'react';

export const BlinkComponent = () => {
  const [mounted, setMounted] = useState(false);
  
  // Replace with your actual action API URL
  const actionApiUrl = 'https://dial.to/?action=solana-action:https://exploreweb3.xyz/learn-earn-game'; // Example URL https://dial.to/?action=solana-action:action-url-here
  
  // Construct Helius RPC URL using environment variable
  const heliusRpcUrl = `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_Helius_API_KEY}`;
  const { adapter } = useActionSolanaWalletAdapter(heliusRpcUrl);
  
  const { action, isLoading } = useAction({
    url: actionApiUrl
  });

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server side
  if (!mounted || isLoading || !action) return null;

  return (
    <div className="blink-container">
      <Blink 
        action={action}
        adapter={adapter}
        stylePreset="x-dark"
      />
    </div>
  );
};