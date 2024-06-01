import axios from 'axios';
import config from '../config';
import { errorHandler } from './utils';

const { baseUrl }  = config;

export  async function fetchCommandsTypes() {
  const url = `${baseUrl}/commands/types`;
  try {
      const response = await axios.get(url);
      for (const command of response.data) { 
        console.log(`${command.name} - ${command.description}`)
      }
  } catch (error) {
      errorHandler(error);
  }
}

export  async function fetchCommandDetails(name: string) {
  const url = `${baseUrl}/commands/types/${name}`;
  try {
      const response = await axios.get(url);
      const command = response.data
      console.log(`${command.name} - ${command.description}`)
      console.log(`template: ${JSON.stringify(command.template)}`)
      // console.log('Success:', JSON.stringify(response.data))
  } catch (error) {
      errorHandler(error);
  }
}

export  async function fetchCommands() {
  const url = `${baseUrl}/commands`;
  try {
      const response = await axios.get(url);
      for (const command of response.data) { 
        console.log(`${command.name} with id ${command._id}. status: ${command.isActive ? 'active' : 'inactive'}`)
      }
  } catch (error) {
      errorHandler(error);
  }
}

export async function createCommand(name: string, params: string, network: string) {
  const url = `${baseUrl}/commands`;

  const data = {
    name,
    params,
    network,
  };
  try {
      const response = await axios.post(url, data);
      const command = response.data
      console.log(`Created ${command.name} command with id ${command._id})`)
      console.log(`goal is configured to: ${JSON.stringify(command.goal.func)}`)
  } catch (error) {
      errorHandler(error);
  }
}

export async function attachWallets(commandId: string, groupId: string) {
  const url = `${baseUrl}/commands/${commandId}/wallets`;

  const data = {
    commandId,
    groupId,
  };
  try {
      const response = await axios.put(url, data);
      const command = response.data
      console.log(`Created ${command.name} command with id ${command._id})`)
      console.log(`goal is configured to: ${command.goal.func}`)
      // TODO: we want to show the goal as an expression
      console.log(command.goal.func)
  } catch (error) {
      errorHandler(error);
  }
}
