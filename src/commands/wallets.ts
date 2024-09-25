import { program } from 'commander';
import { createWallet, insertWallet, fetchWallets, fetchWallet } from '../api/wallets';

const wallets = program.command('wallets')
  .description('working with esemble wallets')

wallets.command('create')
  .description('generate new wallet')
  .action(() => {
    createWallet();
  });
wallets.command('insert')
  .description('Insert a wallet with a specific address')
  .argument('<walletAddress>', 'Wallet address to insert')
  .action((walletAddress) => {
    console.log(`Inserting wallet with address: ${walletAddress}`);
    insertWallet(walletAddress);
    // Here you would typically call an API or a function to insert the wallet into your system
  });

wallets.command('fetch')
  .description('Fetch wallet')
  .argument('<address>', 'fetch wallets by address')
  .action((address) => {
    fetchWallet(address);
  });

wallets.command('ls')
  .description('Fetch all wallets')
  .action(() => {
    fetchWallets();
  });
