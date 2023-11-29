import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('5m2sycMgxGHBHE918WcJ48JMHriTuC7r1wRJfJBz5Ngn7iNpXXS8EyicYGh6qp2Qs1mbEkaSeghD7BvCb5pJtcqP')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('TdY8Zb5aaeakchRUi2BuCZLcQAZw4k83tL7USuHuZLV');
    const publicKeyTo = new Web3.PublicKey('H1G6371AJbpNhATkv5jYCHJJMXAoQEWEjm68n86K1Ujq');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();