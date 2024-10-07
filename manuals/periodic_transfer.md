# Periodic Transfer

## Prerequisites

```bash
WORKFLOW_WALLET= #put here the received wallet address 
RECEIVER_ADDRESS= #put here the received wallet address 
```

## Create workflow

```bash
./ensemble workflows create ./samples/transfer.workflow.yaml
WORKFLOW_ID= #put here the received workflow id
```

## Configurations

### Sepolia

```bash
TOKEN_ADDRESS=0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238 #USDC
PERIODIC_TRANSFER_AMOUNT=100000 # 10 cents
WORKFLOW_NETWORK=base_sepolia
$WORKFLOW_INTERVAL=daily
```

### Base Sepolia

```bash
TOKEN_ADDRESS=0x036CbD53842c5426634e7929541eC2318f3dCF7e # USDC
PERIODIC_TRANSFER_AMOUNT=100000 # 10 cents
WORKFLOW_NETWORK=base_sepolia
```

## Create workflow instance

Now to finish the workflow configuration, we need to create a workflow instance. Workflow instance is the workflow adapted to user's use case. This is the command to create a workflow instance:

```bash
./ensemble instances create $WORKFLOW_ID  -p "{\"WORKFLOW_WALLET\": \"$WORKFLOW_WALLET\", \"RECEIVER_ADDRESS\": \"$RECEIVER_ADDRESS\", \"TOKEN_ADDRESS\": \"$TOKEN_ADDRESS\", \"PERIODIC_TRANSFER_AMOUNT\": \"$PERIODIC_TRANSFER_AMOUNT\", \"WORKFLOW_NETWORK\": \"$WORKFLOW_NETWORK\"}"
WORKFLOW_INSTANCE_ID= #store here the received workflow instance id
```

### Start workflow instance

```bash
./ensemble instances start $WORKFLOW_INSTANCE_ID
```
