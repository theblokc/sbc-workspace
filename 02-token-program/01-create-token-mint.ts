
import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("6sLQySwobQ32JxisSxfSxxVkFaRfBd5K8aezKEYtEHyE")
const decoded = base58.decode('TfZeTSe6KBpt6fLB8u7CtirkBmjEe1ov3oxB6JNvv5bpUGcUt4MonjBbVuDESgW5fujXiC2wT2jXmPRSvPoYMNC')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();