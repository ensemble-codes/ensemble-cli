import { program, Argument } from 'commander';
import { createWorkflow, fetchWorkflow, updateWorkflow } from '../api/workflows';

const workflows = program.command('workflows')
  .description('displaying and starting workflows')

  workflows.command('create')
  .addArgument(new Argument('[filepath]', 'path to the workflow').default('./samples/workflow.yaml'))
  .action((filepath) => {
    console.log('filepath:', filepath);
    createWorkflow(filepath)
  });

  workflows.command('update')
  .argument('[id]', 'worfkfow id')
  .argument('[filepath]', 'path to the workflow')
  .action((id, filepath) => {
    updateWorkflow(id, filepath)
  });

  workflows.command('fetch')
  .argument('--id <id>', 'workflow id')
  .action((id) => {
    fetchWorkflow(id)
  });

  // workflows.command('instance')
  // .argument('<name>', 'workflow name')
  // .option('-p --params <params>', 'specify workflow params')
  // .action((name, { params }) => {
  //   createWorkflowInstance(name, JSON.parse(params));
  // });



  // workflows.command('instance')
  // .argument('<name>', 'workflow name')
  // .option('-p --params <params>', 'specify workflow params')
  // .action((name, { params }) => {
  //   createWorkflowInstance(name, JSON.parse(params));
  // });

  // workflows.command('apply')
  // .argument('<instance>', 'workflow instance id')
  // // .option('-p --params <params>', 'specify workflow params')
  // .action((instance) => {
  //   applyParams(instance);
  // });
