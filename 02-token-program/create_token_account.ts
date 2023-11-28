import {
    Keypair,
    Connection,
    Commitment,
    clusterApiUrl,
    PublicKey,
} from "@solana/web3.js";
import bs58 from "bs58"
import "dotenv/config"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

const start = async () => {
    const COMMITMENT: Commitment = "finalized"
    const CONNECTION = new Connection(clusterApiUrl("devnet"), COMMITMENT)
    const PAYER = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))
    const temp = await getOrCreateAssociatedTokenAccount(CONNECTION, PAYER, new PublicKey("fWpXADuWwg5j3stmPi1nRdapxXri4Vgz5nMaRS7Y4cw"), PAYER.publicKey)
    console.log(temp.address.toString());

}

start();