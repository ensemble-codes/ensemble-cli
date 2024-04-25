// const { program } = require('commander');
import { program } from 'commander'; 
import WalletService from './services/WalletService';

const ws = new WalletService();
program
  .name('ensemble')
  .description('CLI to some ensemble service')
  .version('0.0.1');

program.command('create-wallets')
  .description('Create new wallets')
  .argument('<number>', 'number of wallets to create')
  .action((numberOfWallets) => {
    ws.createWallets(numberOfWallets);
  });

  program.command('onboard')
  .description('onboard group of wallets')
  .argument('<string>', 'group id')
  .action((numberOfWallets) => {
    ws.createWallets(numberOfWallets);
  });

program.parse();


// create X wallets for user
// execute X transactions