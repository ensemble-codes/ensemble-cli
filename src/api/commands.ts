import axios from 'axios';
import config from '../config';
import { errorHandler } from './utils';

const { baseUrl }  = config;

export  async function fetchCommandsTypes() {
  const url = `${baseUrl}/commands/types`;
  try {
      const response = await axios.get(url);
      // console.log('List of available command:');
      for (const command of response.data) { 
        console.log(`${command.name} - ${command.description}`)
      }
  } catch (error) {
      errorHandler(error);
  }
}

export async function startCommand(name: string, kpi: string, network: string) {
  const url = `${baseUrl}/commands`;

  const data = {
    name,
    kpi,
    network,
  };
  try {
      const response = await axios.post(url, data);
      console.log('Success:', response.data)
  } catch (error) {
      errorHandler(error);
  }
}