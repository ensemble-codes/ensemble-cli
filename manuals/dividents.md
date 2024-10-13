# Dividends Workflow

This documents explain dividents distribution workflow that can be done with Ensemble.

## Introduction

The workflow is designed to distribute dividends to a group of wallets.
It can support any ERC20 secutity token, but we suggest to use a token security standard like ERC1400 or ERC3643.

## Flow

1. Generate daily snapshot of the token holders.
   1. Take previous snapshot of the token holders.
   2. Wait for the next day.
   3. Take new snapshot of the token holders.
   4. Sign the snapshot and save it to the database.
2. On new revenues event trigger:
   1. Calculate dividends for each wallet based on the snapshot.
   2. Distribute the dividends to the wallets.
   3. Send the dividends to the wallets.

## Workflow

```yaml
- name: dividends-distribution
  version: 0.1
  wallet:
    address: $WORKFLOW_WALLET
    type: local
  steps:
    - name: generate-snapshot
      module: snapshot
      method: build
      network: $WORKFLOW_NETWORK
      arguments:
          tokenAddress: $SECURITY_TOKEN_ADDRESS
          network: $WORKFLOW_NETWORK
          startBlock: $START_BLOCK
      trigger:
          name: new-reward
          type: event
          contract: RewardsVault
          event: RewardAdded
          startBlock: $START_BLOCK
    - name: approve-distribution
      contract: RewardsVault
      method: approveDistribution
      network: $WORKFLOW_NETWORK
      arguments:
        - tokenHolders: &latest-balances
        - tokenAmounts: &latest-holders
        - rewardId: 0
  contracts:
    - name: RewardsVault
      address: $REWARDS_VAULT_ADDRESS
      abi: RewardsVault.abi
      network: fuse
  feeds:
    - name: latest-holders
      module: snapshot
      method: getLatestHolders
      network: $WORKFLOW_NETWORK
      arguments:
        tokenAddress: $SECURITY_TOKEN_ADDRESS
        network: $WORKFLOW_NETWORK
    - name: latest-balances
      module: snapshot
      method: getLatestBalances
      network: $WORKFLOW_NETWORK
      arguments:
        tokenAddress: $SECURITY_TOKEN_ADDRESS
        network: $WORKFLOW_NETWORK

```
## Configurations

### Sepolia

```bash
SECURITY_TOKEN_ADDRESS=0x19cA72541e0187B1324ED75256A95BbCCf2F9C34 # Security Token
REWARDS_VAULT_ADDRESS=0xd75aa6C3fe4109205B21F600B45C9505D3a4E07E
START_BLOCK=6839030
WORKFLOW_NETWORK=sepolia
```

## Contract ABIs upload

Now if you use run the service locally, you need to upload the ABIs used by the workflow.

```bash
 ./ensemble abi upload RewardsVault.abi  ./abis/RewardsVault.abi.json
```

## Create workflow

```bash
./ensemble workflows create ./samples/dividends.workflow.yaml
WORKFLOW_ID= #put here the received workflow id
```

## Create workflow instance

```bash
./ensemble instances create "$WORKFLOW_ID" -p "{\"SECURITY_TOKEN_ADDRESS\": \"$SECURITY_TOKEN_ADDRESS\", \"REWARDS_VAULT_ADDRESS\": \"$REWARDS_VAULT_ADDRESS\", \"WORKFLOW_NETWORK\": \"$WORKFLOW_NETWORK\", \"WORKFLOW_WALLET\": \"$WORKFLOW_WALLET\", \"START_BLOCK\": \"$START_BLOCK\"}"
WORKFLOW_INSTANCE_ID= #store here the received workflow instance id

## Start workflow instance

```bash
./ensemble instances start $WORKFLOW_INSTANCE_ID
```
