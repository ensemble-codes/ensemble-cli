# Ensemble CLI

## About

Ensemble makes it easy to create and securely execute automated workflows that operate over multiple smart contracts and networks.

Ensemble CLI gives you access to Ensemble automations. Using the CLIt the developer can build, configure and execute their automations.

## Setup

Install dependencies with

```bash
npm install
```

Run the ensemble-service locally or connect to the service via the API. Please refer to the [ensemble-service README](https://github.com/ensemble-labs/ensemble-service) for more information. Make sure that the service is running and that the `.env` file is set up correctly.

## Getting Started

Let's create and run our first automation. We can use any workflow from our samples.

## Prerequisites

Make sure that the Ensemble engine and API service are running.

### Create wallet

Create the workflow wallet that will be operated in the workflow

``` bash
 ./ensemble.sh wallets create
 WORKFLOW_WALLET= #put wallet address 
 ```

### Upload the ABIs used

```bash
 ./ensemble.sh abi upload erc20.abi  ./samples/erc20.abi.json
```

Creatung a workflow by chosing ready workflow from the samples folder

``` bash
./ensemble.sh workflows create ./samples/transfer.workflow.yaml
WORKFLOW_ID= #put workflow id here
```

Create the workflow wallet that will be operated in the workflow

### Create workflow

Chosing a ready workflow from the samples

``` bash
./ensemble.sh workflows create ./samples/transfer.workflow.yaml
WORKFLOW_ID= #put workflow id here
```

### Configure workflow

By configuring a command we create a workflow instance object

```bash
./ensemble.sh instances create $WORKFLOW_ID  -p '{"WORKFLOW_WALLET": "<WORKFLOW_WALLET_ADDRESS>", "WORKFLOW_NETWORK": "<network>", "<WORKFLOW_WALLET_ADDRESS>": "TOKEN_ADDRESS", "<TOKEN_ADDRESS>": "0x44661D7EfD4CAD7D8290Ebe704b747F267FB13C3", "PERIODIC_TRANSFER_AMOUNT": "1000000000000000000"}'
WORKFLOW_INSTANCE_ID= #put id here
```

### Start a workflow

Start and the workflow

``` bash
./ensemble.sh instances start $WORKFLOW_INSTANCE_ID
```

## More Workflow Examples

./ensemble.sh workflows create ./samples/dca.workflow.yaml
WORKFLOW_ID=

### FUSE

./ensemble.sh instances create $WORKFLOW_ID  -p '{"BUY_TOKEN": "0x44661D7EfD4CAD7D8290Ebe704b747F267FB13C3", "BUY_AMOUNT": "100", "SELL_TOKEN": "0x44661D7EfD4CAD7D8290Ebe704b747F267FB13C3", "DEX_ADDRESS": "0x44661D7EfD4CAD7D8290Ebe704b747F267FB13C3", "WORKFLOW_WALLET": "0x44661D7EfD4CAD7D8290Ebe704b747F267FB13C3", "MIN_ALLOWANCE_AMOUNT": "10000"}'

### Sepolia

./ensemble.sh instances create $WORKFLOW_ID  -p '{"BUY_TOKEN": "0x34d5Feb1C239714f17A295330426B4E8B44C90a8", "BUY_AMOUNT": "100", "SELL_TOKEN": "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14", "DEX_ADDRESS": "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD", "WORKFLOW_WALLET": "0x2c37691967de1A1E4eE68ae4D745059720A6dB7F", "MIN_ALLOWANCE_AMOUNT": "10000"}'

### Base Sepolia

./ensemble.sh instances create $WORKFLOW_ID  -p '{"BUY_TOKEN": "0x036CbD53842c5426634e7929541eC2318f3dCF7e", "SELL_AMOUNT": "100", "SELL_TOKEN": "0x4200000000000000000000000000000000000006", "DEX_ADDRESS": "0x050E797f3625EC8785265e1d9BDd4799b97528A1", "WORKFLOW_WALLET": "0x2c37691967de1A1E4eE68ae4D745059720A6dB7F", "MIN_ALLOWANCE_AMOUNT": "100000000000"}'

WORKFLOW_INSTANCE_ID=
