import axios from 'axios';

import config from '../config';
import { errorHandler } from './utils';
const { baseUrl }  = config;


export async function createInstance(workflowId: string, params: Map<string, string>) {
  const url = `${baseUrl}/workflows/instances/`;
  const data = {
    workflowId,
    params
  }
  try {
    const response = await axios.post(url, data);
    console.log('Success:', response.data);
    console.log(`New workflow Instance created, id: ${response.data._id}`);
  } catch (error) {
    errorHandler(error);
  }
}

export async function fetchInstance(id: string) {
  const url = `${baseUrl}/workflows/instances/apply/${id}`;

  try {
    console.log('url:', url)
      const response = await axios.get(url);
      console.log('Success:', JSON.stringify(response.data));
  } catch (error) {
      errorHandler(error);
  }
}

export async function fetchInstanceByStatus(status: string) {
  const url = `${baseUrl}/workflows/instances/status/${status}`;

  try {
    console.log('Fetching instances with status:', status);
    const response = await axios.get(url);
    console.log('Success:', JSON.stringify(response.data));
  } catch (error) {
    errorHandler(error);
  }
}



export async function fetchInstanceAndApply(id: string) {
  const url = `${baseUrl}/workflows/instances/apply/${id}`;

  try {
    console.log('url:', url)
      const response = await axios.get(url);
      console.log('Success:', JSON.stringify(response.data));
  } catch (error) {
      errorHandler(error);
  }
}

export async function startInstance(instanceId: string) {
  const url = `${baseUrl}/workflows/instances/start/${instanceId}`;
  try {
    const response = await axios.post(url);
    console.log('Instance started:', JSON.stringify(response.data));
  } catch (error) {
    errorHandler(error);
  }
}

export async function stopInstance(instanceId: string) {
  const url = `${baseUrl}/workflows/instances/stop/${instanceId}`;
  try {
    const response = await axios.post(url);
    console.log('Instance stopped:', JSON.stringify(response.data));
  } catch (error) {
    errorHandler(error);
  }
}

