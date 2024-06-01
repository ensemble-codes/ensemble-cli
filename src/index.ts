import { program } from 'commander';
import { createWallets, fetchWalletsByGroup, fetchCommandsTypes, fetchCommandDetails, createCommand, fetchCommands, attachWallets, fetchWalletsGroups } from './api';
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
  .argument('[provider]', 'wallet provider')
  .action((numberOfWallets) => {
    createWallets(numberOfWallets);
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


const commands = program.command('commands')
  .description('displaying and starting commands')

commands.command('types')
  .description('displaying available command types')
  .argument('[name]', 'command name to get details')
  .action((name) => {
    if (name) {
      fetchCommandDetails(name);
    } else {
      fetchCommandsTypes();
    }
  });


commands.command('ls')
  .description('List all available commands')
  .option('--active <isActive>', 'list only active commands')
  .action(() => {
    fetchCommands();
  });

commands.command('create')
  .argument('<name>', 'command name to start')
  .argument('<params>', 'command goal to achieve')
  .option('--network <network>', 'command network to use')
  .description('Start a command')
  .action((name, params, options) => {
    createCommand(name, params, options.network)
  });

commands.command('attach')
  .argument('<commandId>', 'command id to activate')
  .argument('<groupId>', 'command id to activate')
  .description('attach wallets to a command')
  .action((commandId, groupId) => {
    attachWallets(commandId, groupId)
  });

program.parse();
