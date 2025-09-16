Auto-deploy Moneos Network (MO) to BSC Testnet using GitHub Actions
---------------------------------------------------------------

1) Upload this project to a new GitHub repository (branch: main).
2) In GitHub > Settings > Secrets and variables > Actions add two secrets:
   - PRIVATE_KEY : the private key of a testnet account (0x...)
   - RPC_URL : (optional) a custom RPC URL (default to BSC testnet public node)

3) Make sure the account has a small amount of testnet BNB (tBNB) to pay gas.
   Use a BSC testnet faucet to get tBNB.

4) Push a change to the main branch; the GitHub Action will compile and deploy the contract.
   After deployment the contract address will be stored in `addresses/bscTestnet.json` in the repo.

Important security notes:
- NEVER commit your real mainnet private key or seed phrase.
- For production you'll want a secure deployment flow and hardware wallet.