import { program } from 'commander';
import { createWallet, fetchWalletsByGroup,  fetchWalletsGroups } from '../api/wallets';

const wallets = program.command('wallets')
  .description('working with esemble wallets')

wallets.command('create')
  .description('generate new wallet')
  .action(() => {
    createWallet();
  });

wallets.command('fetch')
  .description('Fetch wallets by group')
  .argument('<groupId>', 'fetch wallets by group id')
  .action((groupId) => {
    fetchWalletsByGroup(groupId);
  });

wallets.command('ls')
  .description('Fetch wallets by group')
  .action((groupId) => {
    fetchWalletsGroups();
  });
