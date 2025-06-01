import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

async function main() {
  const seedPhrase = "mfer this is my twelve word seed phrase for my solana wallet" ; // 🔐 insert your real phrase
  const seed = await bip39.mnemonicToSeed(seedPhrase);
  const derivedSeed = derivePath("m/44'/501'/0'/0'", seed.toString("hex")).key;
  const keypair = Keypair.fromSeed(derivedSeed);

  console.log("🔑 Private Key Array (copy into .env):");
  console.log(JSON.stringify(Array.from(keypair.secretKey)));
}

main().catch(console.error);
