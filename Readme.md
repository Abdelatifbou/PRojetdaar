# Collectible Card Game

Welcome to the DAAR project. The idea will be to implement a Collectible Card Game
in a decentralized way, on Ethereum. This will force you to iterate through the creation
of CCG cards as NFT, create a marketplace for players to exchange NFT, and run a frontend to create collections.

## Authors
- [@BESSABIS Abdeldjaoued](https://github.com/abdo224) 21315076
- [@Bouroucha Abdelatif]


## Demo



[Download Demo Video](./video.mkv)




# Installation

```bash
# With HTTPS
git clone https://github.com/ghivert/collectible-card-game-daar.git
# Or with SSH
git clone git@github.com:ghivert/collectible-card-game-daar.git
```

You’ll need to install dependencies. You’ll need [`HardHat`](https://hardhat.org/), [`Node.js`](https://nodejs.org/en/), [`NPM`](https://www.npmjs.com/) and [`Yarn`](https://yarnpkg.com/). You’ll need to install [`Metamask`](https://metamask.io/) as well to communicate with your blockchain.

- `HardHat` is a local blockchain development, to iterate quickly and avoiding wasting Ether during development. Fortunately, you have nothing to do to install it.
- `Node.js` is used to build the frontend and running `truffle`, which is a utility to deploy contracts.
- `NPM` or `Yarn` is a package manager, to install dependencies for your frontend development. Yarn is recommended.
- `Metamask` is a in-browser utility to interact with decentralized applications.

# Some setup

Once everything is installed, launch the project (with `yarn dev`). You should have a local blockchain running in local. Open Metamask, setup it, and add an account from the Private Keys HardHat displays.
Now you can connect Metamask to the blockchain. To do this, add a network by clicking on `Ethereum Mainnet` and `personalized RPC`. Here, you should be able to add a network.

![Ganache Config](public/ganache-config.png)

Once you have done it, you’re connected to the HardHat blockchain!

# Installation

Install the dependencies.

```bash
# Yarn users
yarn
```

Run the complete project.

```bash
# Yarn users
yarn dev
```

You’re good to go!

---

# Subject

TCG, or Trading Card Game, sometimes called CCG, for Collectible Card Game, are a type of game in which you're opening randomized packs of cards, called boosters, and you're building your pack of cards, called decks, to play against other players. This is a popular format nowadays, both physically or digitally. The most famous of them are [Magic, The Gathering](https://en.wikipedia.org/wiki/Magic:_The_Gathering_Arena), [Pokémon TCG](https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game), [Yu-Gi-Oh!](https://en.wikipedia.org/wiki/Yu-Gi-Oh!_Trading_Card_Game), [Hearthstone](https://en.wikipedia.org/wiki/Hearthstone), [Marvel Snap](https://en.wikipedia.org/wiki/Marvel_Snap), or even [Legends of Runeterra](https://en.wikipedia.org/wiki/Legends_of_Runeterra). You probably heard about at least one, maybe played with some of them.
The subject of this project will be to put yourself at the place of a TCG creator, and to create a TCG on the Ethereum and other EVM-compatible blockchains. To fulfill this goal, you'll need to understand the different parts of the game, from the onchain part (hosted on the blockchain) to the offchain parts (the frontend and the backend) of the game. While you could go to the end and build a complete, working TCG, you'll not be asked to build a game engine. This would take more than a bunch of weeks, and it's not the scope of the project. The project will be focused on building the _collectible_ part of the project. In other words, you'll build the way to collect digital cards, make them possible to exchange with some friends, browse the cards on your web browser, and order your collection as you want.
In a real TCG, a new set of cards is published approximately every 3 to 4 months. You work will be to build a complete infrastructure able to manage a new collection of cards on a regular basis.

More specifications: the cards will be represented as NFT, or Non-Fungible Tokens. It's the best way to represent collectibles on a blockchain. For this, you'll implement the ERC-721 norm, and you'll build the different frontends and backends on your own. The project is here to help you kickstart the infrastructure.
