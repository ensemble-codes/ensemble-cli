#!/bin/bash

# Path to the Node.js executable
NODE_BIN=$(which ts-node)

# Path to the TypeScript file
SCRIPT_PATH="./src/index.ts"

# Run the TypeScript file using ts-node and pass all arguments
"$NODE_BIN" "$SCRIPT_PATH" "$@"