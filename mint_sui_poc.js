// mint_sui_poc.js
import crypto from "crypto";
import fs from "fs";

// Generate random rarity (0-4)
function getRandomRarity() {
  return Math.floor(Math.random() * 5);
}

// Mint function
function mintNFT(id) {
  const rarity = getRandomRarity();
  const rnd = BigInt("0x" + crypto.randomBytes(16).toString("hex")); // dummy randomness
  const salt = "mysalt";
  const proof = crypto.createHash("sha3-256")
    .update(rnd.toString() + id + salt)
    .digest("hex");

  const nft = {
    id,
    rarity,
    rnd: rnd.toString(),
    proof,
    salt,
    howToVerify: "Check sha3-256(rnd+id+salt) == proof"
  };

  fs.writeFileSync(`proofs_${id}.json`, JSON.stringify(nft, null, 2));
  console.log("Minted NFT:", nft);
  return nft;
}

// Run example mint
mintNFT("nft-1");
