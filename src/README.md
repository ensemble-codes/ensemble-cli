# Ensemble CLI

This repo contains the CLI for the Ensemble protocol. It it used to start and manage your commands by configuring goals, wallets and rewards.

## Setup

Install dependencies with

```bash
npm install
```

Run the ensemble-service locally or connect to the service via the API. Please refer to the [ensemble-service README](https://github.com/ensemble-labs/ensemble-service) for more information. Make sure that the service is running and that the `.env` file is set up correctly.

## Getting Started

### What are commands

With Ensemble, the user defines its on-chain goal by using Ensemble's declerative language. Commands expressions in this language that are specially dedicated for a certain use case.

## Choose a command

List the available commands with

```bash
./ensemble.sh commands types

loadtest - Run a network load test
gas-manipulation - Maintains the gas price in the defined range
balance-maintain - Maintains the account balance in the defined range
token-activity - Generate token activity
game-activity - Generate game activity
```


Get command details

```bash
 ./ensemble.sh commands types balance-maintain

 ```

## Command Documentation

1. **Gas Manipulation Command**
   - **Command**: `./ensemble.sh create gas-manipulation '{"max_gas_price": 10}' --network fuse`
   - **Description**: This command is used to set the maximum gas price for transactions.
   - **Parameters**:
     - `max_gas_price`: The maximum price of gas you are willing to pay per unit (in Gwei).
   - **Network**: `fuse` - This specifies the blockchain network on which the command will be executed.

2. **Game Activity Command**
   - **Command**: `./ensemble.sh commands create game-activity '{"contract_address": "10xE3F85aAd0c8DD7337427B9dF5d0fB741d65EEEB50", "token_address": "0xA8d1B5bf7568F96F5598d1736Fa5c55A9B1ACD60", "min_volume": "100"}' --network op_sepolia`
   - **Description**: This command is used to create or update game activity settings related to a specific contract.
   - **Parameters**:
     - `contract_address`: The Ethereum address of the contract.
     - `token_address`: The Ethereum address of the token associated with the game.
     - `min_volume`: The minimum volume of tokens required for the activity to be considered valid.
   - **Network**: `op_sepolia` - This specifies the blockchain network on which the command will be executed.
