# bonk burn

- `/program` - Solana Program Source and IDL
- `/app` - Front end deployment using NextJS

Though BonkBurn is bonk focused, the program, is generic. Burn accts are seeded by `wallet` and `mint` so a user can have many token burn accounts. This front end will filter high scores only for desired tokens and facilitate burns just for that token. 

PRs, issues, feedback welcome. Thanks! 🙏

### Key Variables: 
- Cluster: `mainnet-beta`
- ProgramId: `FiRESpaNzgYUiba5vkb44CZJLZjrux1AUECdfwPRsNkg`
- BonkMint: `DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263` 


## Getting Started (Front End)

Rename `.env.example` to `.env`.
Update `REACT_APP_SOLANA_RPC_HOST` with your devnet RPC or the public: `https://api.devnet.solana.com`

Update `app\utils\constants.ts` as necessary:
- Make sure reference to `.env` is correct in `SOLANA_RPC`
- Update `TOKEN_CONFIG` to reflect your token of choice

```typescript
export const SOLANA_RPC: string = process.env.REACT_APP_SOLANA_RPC_HOST as string;

export const TOKEN_CONFIG = {
    mint: new PublicKey('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'),
    name: 'Bonk',
    symbol: 'BONK'
}
```
If deploying your own site, make sure to update `HomeView` component with your metadata 

Run the development server:

```bash
npm install
#or
yarn
```

```sh
npm run dev
# or
yarn dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

////

Program: `FiRESpaNzgYUiba5vkb44CZJLZjrux1AUECdfwPRsNkg`
Creator: `MiLZAcWZgMYvFnZqzJ6XRj4h5r47bgX64Vt5gRnBvqv`
