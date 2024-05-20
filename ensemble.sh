#!/bin/bash

# Path to the Node.js executable
NODE_BIN=$(which ts-node)

# Path to the compiled JavaScript file
SCRIPT_PATH="./src/index.ts"

# Run the JavaScript file using Node.js
"$NODE_BIN" "$SCRIPT_PATH"