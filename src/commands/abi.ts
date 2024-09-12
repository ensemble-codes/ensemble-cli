import { program } from 'commander';
import { uploadAbi } from '../api/abi';

const abi = program.command('abi')
  .description('uploading and fetching abi files')


  abi.command('upload')
  .argument('<name>', 'name to the abi')
  .argument('<filepath>', 'path to the abi')
  .action((name, filepath) => {
    uploadAbi(name, filepath)
  });


  // abi.command('instance')
  // .argument('<name>', 'workflow name')
  // .action((name) => {
  //   createWorkflowInstance(name);
  // });
