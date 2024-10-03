// components/account/AccountModals.tsx
"use client";
import { AppModal } from '../ui/ui-layout';
import { PublicKey } from '@solana/web3.js';
import { useRequestAirdrop } from './account-data-access'; // Import your hook
import { useState } from 'react';

function ModalReceive({
  hide,
  show,
  address,
}: {
  hide: () => void;
  show: boolean;
  address: PublicKey;
}) {
  return (
    <AppModal title="Receive" hide={hide} show={show} submit={() => {}} submitLabel="Receive">
      <p>Receive assets by sending them to your public key:</p>
      <code>{address.toString()}</code>
    </AppModal>
  );
}

function ModalAirdrop({
  hide,
  show,
  address,
}: {
  hide: () => void;
  show: boolean;
  address: PublicKey;
}) {
  const mutation = useRequestAirdrop({ address });
  const [amount, setAmount] = useState('2');

  return (
    <AppModal
      hide={hide}
      show={show}
      title="Airdrop"
      submitLabel="Request Airdrop"
      submit={() => mutation.mutateAsync(parseFloat(amount)).then(() => hide())}
    >
      <input
        disabled={mutation.isPending}
        type="number"
        step="any"
        min="1"
        placeholder="Amount"
        className="input input-bordered w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </AppModal>
  );
}

// Export your modals
export { ModalReceive, ModalAirdrop };
