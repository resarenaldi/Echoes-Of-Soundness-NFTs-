# Echoes Of Soundness - NFTs (PoC)

This repository is a **Proof of Concept (PoC)** for an idea of an **NFT Mystery Box on SUI**.

Each minted NFT generates:
- 🎲 A rarity value (0–4)  
- 🔀 A random number (dummy randomness)  
- 🔐 A cryptographic proof (sha3-256)  
- 📦 An output JSON file containing NFT data + verification method  

---

## 🚀 How to Run

1. **Clone this repository**

```bash
git clone https://github.com/resarenaldi/Echoes-Of-Soundness-NFTs.git
cd Echoes-Of-Soundness-NFTs

2. Run the script (Node.js required)



node mint_sui_poc.js

3. Check output JSON
A new JSON file will be generated (e.g. proofs_nft-1.json) containing the NFT data and proof.




---

📦 Example Output

You can see a sample NFT output here: 👉 proofs_nft-1.json

Example content:

{
  "id": "nft-1",
  "rarity": 3,
  "rnd": "0x9f3a12b7c4e9",
  "proof": "4e4aef53a21e0c9a5bd44983af72bb1d6f98fdb57e8fbf55ab07a3d6c91e2a4",
  "salt": "mysalt",
  "howToVerify": "Check sha3-256(rnd+id+salt) == proof"
}


---

🖼 Demo

Here’s an example run of the script:

$ node mint_sui_poc.js
Minting new NFT on SUI (PoC)...

✔ Generated NFT ID: nft-1
✔ Assigned rarity: 3
✔ Random number: 0x9f3a12b7c4e9
✔ Generated cryptographic proof (sha3-256)

NFT successfully minted!
Output saved to: proofs_nft-1.json


---

🛠 Next Steps (Ideas)

Implement real randomness (on-chain oracles)

Deploy a Move smart contract on SUI

Add metadata (image, name, description) for each NFT

Create a front-end dApp for minting & viewing NFTs



---

📜 License

MIT License. Free to use and modify.

---

