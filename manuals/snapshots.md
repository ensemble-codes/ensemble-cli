# Snapshot workflow manual

## Prerequisites

```bash
WORKFLOW_WALLET= #put here the received wallet address 
```

## Create workflow

```bash
./ensemble workflows create ./samples/snapshot.workflow.yaml
WORKFLOW_ID= #put here the received workflow id
```

## Configurations

### Sepolia

```bash
TOKEN_ADDRESS=0x19cA72541e0187B1324ED75256A95BbCCf2F9C34 # Security Token
START_BLOCK=6839030
WORKFLOW_NETWORK=sepolia
```

## Create workflow instance

```bash
./ensemble instances create "$WORKFLOW_ID" -p "{\"TOKEN_ADDRESS\": \"$TOKEN_ADDRESS\", \"WORKFLOW_NETWORK\": \"$WORKFLOW_NETWORK\", \"WORKFLOW_WALLET\": \"$WORKFLOW_WALLET\", \"START_BLOCK\": \"$START_BLOCK\"}"
WORKFLOW_INSTANCE_ID= #store here the received workflow instance id
```

validate the instance has been created

```bash
./ensemble instances fetch $WORKFLOW_INSTANCE_ID
```

## Start workflow instance

```bash
./ensemble instances start $WORKFLOW_INSTANCE_ID
```
