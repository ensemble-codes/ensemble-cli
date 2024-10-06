import axios from 'axios';

import config from '../config';
import { errorHandler } from './utils';
const { baseUrl }  = config;


export async function createInstance(workflowId: string, params: Map<string, string>) {
  const url = `${baseUrl}/instances/`;
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
  const url = `${baseUrl}/instances/${id}`;

  try {
      const response = await axios.get(url);
      const formattedData = [response.data].map((instance: any) => ({
        _id: instance._id,
        'workflowId': instance?.workflow?._id,
        'workflowName': instance?.workflow?.name,
        'status': instance.status,
        'walletAddress': `${instance?.params["WORKFLOW_WALLET"].slice(0, 4)}...${instance?.params["WORKFLOW_WALLET"].slice(-4)}`,
        'lastUpdated': instance.updatedAt,
      }));
      console.table(formattedData);

      console.log('workflow params:')
      console.log(response.data.params)

  } catch (error) {
      errorHandler(error);
  }
}

export async function fetchInstances() {
  const url = `${baseUrl}/instances/`;

  try {
      const response = await axios.get(url);
      // console.log('Success:', JSON.stringify(response.data));
      
      const formattedData = response.data.map((instance: any) => ({
        _id: instance._id,
        'workflowId': instance?.workflow?._id,
        'workflowName': instance?.workflow?.name,
        'status': instance.status,
        'walletAddress': `${instance?.params["WORKFLOW_WALLET"].slice(0, 4)}...${instance?.params["WORKFLOW_WALLET"].slice(-4)}`,
        'lastUpdated': instance.updatedAt,
      }));
      console.table(formattedData);
  } catch (error) {
      errorHandler(error);
  }
}

export async function fetchInstanceByStatus(status: string) {
  const url = `${baseUrl}/instances/status/${status}`;

  try {
    console.log('Fetching instances with status:', status);
    const response = await axios.get(url);
    console.log(`There is ${response.data.length} instances with status ${status}`);
    const formattedData = response.data.map((instance: any) => ({
      _id: instance._id,
      'workflowId': instance.workflow._id,
      'workflowName': instance.workflow.name,
      'walletAddress': `${instance?.params["WORKFLOW_WALLET"].slice(0, 4)}...${instance?.params["WORKFLOW_WALLET"].slice(-4)}`,
      'lastUpdated': instance.updatedAt
    }));
    console.table(formattedData);
  } catch (error) {
    errorHandler(error);
  }
}



export async function fetchInstanceAndApply(id: string) {
  const url = `${baseUrl}/instances/apply/${id}`;

  try {
    console.log('url:', url)
      const response = await axios.get(url);
      console.log('Success:', JSON.stringify(response.data));
  } catch (error) {
      errorHandler(error);
  }
}

export async function startInstance(instanceId: string) {
  const url = `${baseUrl}/instances/start/${instanceId}`;
  try {
    const response = await axios.post(url);
    console.log('Instance started:', JSON.stringify(response.data));
  } catch (error) {
    errorHandler(error);
  }
}

export async function stopInstance(instanceId: string) {
  const url = `${baseUrl}/instances/stop/${instanceId}`;
  try {
    const response = await axios.post(url);
    console.log('Instance stopped:', JSON.stringify(response.data));
  } catch (error) {
    errorHandler(error);
  }
}

