# DCA workflow manual

## Prerequisites

```bash
WORKFLOW_WALLET= #put here the received wallet address 
```

## Create workflow

```bash
./ensemble workflows create ./samples/dca.workflow.yaml
WORKFLOW_ID= #put here the received workflow id
```

## Configurations

### Base Sepolia

```bash
BUY_TOKEN=0x036CbD53842c5426634e7929541eC2318f3dCF7e # USDC
SELL_TOKEN=0x4200000000000000000000000000000000000006 # WETH
SELL_AMOUNT=1000000000 # selling 1 gwei of WETH
WORKFLOW_NETWORK=base_sepolia
```

## Create workflow instance

```bash
./ensemble instances create "$WORKFLOW_ID"  -p "{\"BUY_TOKEN\": \"$BUY_TOKEN\", \"SELL_AMOUNT\": \"$SELL_AMOUNT\", \"SELL_TOKEN\": \"$SELL_TOKEN\", \"WORKFLOW_WALLET\": \"$WORKFLOW_WALLET\", \"WORKFLOW_NETWORK\": \"$WORKFLOW_NETWORK\"}"
WORKFLOW_INSTANCE_ID= #store here the received workflow instance id
```

## Start workflow instance

```bash
./ensemble instances start $WORKFLOW_INSTANCE_ID
```
