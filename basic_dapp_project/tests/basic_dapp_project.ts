import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import {BasicDappProject} from "../target/types/basic_dapp_project";
import { assert } from "chai";

describe("basic_dapp_project", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const provider = anchor.getProvider();
  const program = anchor.workspace.BasicDappProject as Program<BasicDappProject>;
  const keyPair = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {
    const tx = await program.methods.initialize("Hello World", "first Post").accounts({
      post: keyPair.publicKey,
      user: provider.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    }).signers([keyPair]).rpc();

    const { title, content } = await program.account.post.fetch(
      keyPair.publicKey
    );
    assert.ok(title === "Hello World");
    assert.ok(content === "first Post");
  });
});