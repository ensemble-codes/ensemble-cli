import { program } from 'commander';
import { createInstance, fetchInstance, fetchInstances, fetchInstanceByStatus, startInstance, stopInstance, resetInstance } from '../api/instances';


const instances = program.command('instances')
  .argument('<id>', 'instance id')
  .description('displaying workflows instances')


  instances.command('create')
  .argument('<name>', 'workflow name to use')
  .option('-p --params <params>', 'specify workflow params')
  .action((name, { params }) => {
    createInstance(name, JSON.parse(params));
  });

  instances.command('reset')
  .argument('<id>', 'reset workflow instance by id')
  .action((id) => {
    resetInstance(id);
  });

  instances.command('fetch')
  .description('fetching instance by id')
  .argument('<id>', 'instance id')
  .action((id) => {
    fetchInstance(id)
  });

  instances.command('ls')
  .description('fetching your workflows instances')
  .action(() => {
    fetchInstances()
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

