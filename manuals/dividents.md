# Dividents Workflow

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

## Prerequisites
