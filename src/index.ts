import { program } from 'commander';
import { createWallets, fetchWalletsByGroup } from './commands';
import 'dotenv/config';

program
  .name('ensemble')
  .description('CLI to some ensemble service')
  .version('0.0.1');

program.command('create-wallets')
  .description('Create new wallets')
  .argument('<number>', 'number of wallets to create')
  .action((numberOfWallets) => {
    createWallets(numberOfWallets);
  });

  program.command('fetch-wallets')
  .description('Fetch wallets by group')
  .argument('<string>', 'fetch wallets by group id')
  .action((groupId) => {
    fetchWalletsByGroup(groupId);
  });


  program.command('onboard')
  .description('onboard group of wallets')
  .argument('<string>', 'group id')
  .action((numberOfWallets) => {
    // ws.createWallets(numberOfWallets);
  });

program.parse();


// create X wallets for user
// execute X transactions