import * as Web3 from '@solana/web3.js';
import Dotenv from 'dotenv';
import base58 from 'bs58';
Dotenv.config();


async function main () {
  const url = Web3.clusterApiUrl('devnet');
  const connection = new Web3.Connection(url);

  const secretKey = process.env.PRIVATE_KEY
  const decoded = base58.decode(secretKey as any);
  const userKeyPair = Web3.Keypair.fromSecretKey(decoded);

  const publicKeyTo = new Web3.PublicKey('4DJDaaL9Q8qMxzJ74F9FJyzwRWPaHnQgJ1NkmRcsZZxj');

  const instruction = Web3.SystemProgram.transfer({
    fromPubkey: userKeyPair.publicKey,
    toPubkey: publicKeyTo,
    lamports: Web3.LAMPORTS_PER_SOL * 1,
  });

  const transaction = new Web3.Transaction();
  transaction.add(instruction);

  const signature = await Web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [userKeyPair],
  );

  console.log('transaction signature', signature);
}

main();