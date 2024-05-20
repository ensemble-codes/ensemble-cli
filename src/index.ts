import { program } from 'commander';
import { createWallets, fetchWalletsByGroup, fetchCommandsTypes, startCommand } from './api';
import 'dotenv/config';

program
  .name('ensemble')
  .description('CLI to some ensemble service')
  .version('0.0.1');


const wallets = program.command('wallets')
.description('working with esemble wallets')

wallets.command('create')
  .description('Create new wallets')
  .argument('<number>', 'number of wallets to create')
  .argument('[string]', 'wallet provider')
  .action((numberOfWallets) => {
    createWallets(numberOfWallets);
  });

wallets.command('fetch')
.description('Fetch wallets by group')
.argument('<string>', 'fetch wallets by group id')
.action((groupId) => {
  fetchWalletsByGroup(groupId);
});




const commands = program.command('commands')
  .description('displaying and starting commands')

commands.command('ls')
  .description('List all available commands')
  .action(() => {
    fetchCommandsTypes();
  });

commands.command('create')
  .argument('<string>', 'command name to start')
  .argument('<string>', 'command kpi to achieve')
  .argument('<string>', 'command network to use')
  .description('Start a command')
  .action((name, kpi, network) => {
    startCommand(name, kpi, network)
  });


const triggers = program.command('triggers')
  .description('displaying command triggers')


triggers.command('ls')
  .description('List all available triggers')
  .action(() => {
    console.log('ls');
  });

program.command('status')
  .description('viewing the commands status')


  // program.command('onboard')
  // .description('onboard group of wallets')
  // .argument('<string>', 'group id')
  // .action((numberOfWallets) => {
  //   // ws.createWallets(numberOfWallets);
  // });

program.parse();
