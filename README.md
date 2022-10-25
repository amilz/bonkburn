# toly token flip to mint game
*submission to solana core alpha program (10/28ish/2022)*

1. user: select `heads` or `tails` and deposit `0.1` sol
2. program: determine if winner or not
3. if winner: send `1` $TOLY WL Token
    - program tracks number of wins in a row in a `streak` pda
    - program tracks personal best record in `personal best` pda
    - (maybe) tracks global best record in `record` pda
4. user can use WL token to mint a toly token from candy machine

Keys: 
- Cluster: `devnet`
- ProgramId: `7b8ZM4sAdsL9hP9yjQpYDYKoPK8jdgjnQtQJXUBku6Kf`
- WLTokenMintId: ``
- CMID: ``

