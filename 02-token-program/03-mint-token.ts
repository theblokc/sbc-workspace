import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("9Ub5VdnqnVReicE6hgCfnoChja16ewmGiNTd6C6s8jFC") // PUBKEY of person you want to create the token account

const decoded = base58.decode('TfZeTSe6KBpt6fLB8u7CtirkBmjEe1ov3oxB6JNvv5bpUGcUt4MonjBbVuDESgW5fujXiC2wT2jXmPRSvPoYMNC')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "8WE43MimPcKxDy1ZBT9Yams2UJVM9zrWnwTyX3W8xwBs"
const tokentAccount = "9puVQkHCzwKeVuwmuyYBqMP7iZF4mRR5hVcP3r64142h"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );


    const minting = await token.mintTo(
        connection,
        keyPair,
        new Web3.PublicKey(tokenMint),
        new Web3.PublicKey(tokentAccount),
        publickey,
        1
    )
  
    console.log(minting)
    console.log(tokenAccount.toBase58());
}

main();