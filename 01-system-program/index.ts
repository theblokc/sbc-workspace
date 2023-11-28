import * as Web3 from '@solana/web3.js';

async function main(){
     // initialize public key
    const publicKey = new Web3.PublicKey('4EMjRcChGyDqNGRcagcf3EsjwyrkpaqT93FRdcypzS3j');
    // initialize url
		const url = Web3.clusterApiUrl('devnet');
    const connection = new Web3.Connection(url);

		// get balance
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);

    const accountInfo = await connection.getAccountInfo(publicKey);
    console.log('accountInfo', accountInfo);
}

main()