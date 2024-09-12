import { program } from 'commander';
import { createInstance, fetchInstanceAndApply, fetchInstanceByStatus, startInstance, stopInstance, } from '../api/instances';


const instances = program.command('instances')
  .argument('<id>', 'instance id')
  .description('displaying workflows instances')


  instances.command('create')
  .argument('<name>', 'workflow name to use')
  .option('-p --params <params>', 'specify workflow params')
  .action((name, { params }) => {
    createInstance(name, JSON.parse(params));
  });

  instances.command('fetch')
  .description('fetching instance by id')
  .argument('<id>', 'instance id')
  .action((id) => {
    fetchInstanceAndApply(id)
  });

  instances.command('status')
  .description('fetching instance by status')
  .argument('<status>', 'instance status')
  .action((status) => {
    fetchInstanceByStatus(status)
  });



  instances.command('start')
  .description('start instance by id')
  .argument('<id>', 'instance id')
  .action((id) => {
    startInstance(id)
  });

  instances.command('stop')
  .description('stop instance by id')
  .argument('<id>', 'instance id')
  .action((id) => {
    stopInstance(id)
  });

