import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('TdY8Zb5aaeakchRUi2BuCZLcQAZw4k83tL7USuHuZLV');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}
main()