import { program } from 'commander';
import './commands/wallets'
import './commands/workflows'
import './commands/abi'
import './commands/instances'
import 'dotenv/config';

program
  .name('ensemble')
  .description('CLI to some ensemble service')
  .version('0.0.1');

program.parse();
