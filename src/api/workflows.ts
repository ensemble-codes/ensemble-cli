import axios from 'axios';
import yaml from 'js-yaml';
import fs from 'fs';

import config from '../config';
import { errorHandler } from './utils';
const { baseUrl }  = config;


export async function createWorkflow(filepath: string) {
  const url = `${baseUrl}/workflows/`;
  const docs: any  = yaml.load(fs.readFileSync(filepath, 'utf8'));
  const workflow = docs[0]
  const data = {
    ...workflow
  }
  try {
    const response = await axios.post(url, data);
    console.log(`New workflow created, name: ${response.data.name}. id: ${response.data._id}`);
  } catch (error) {
    errorHandler(error);
  }
}

export async function updateWorkflow(id: string, filepath: string) {
  const url = `${baseUrl}/workflows/${id}`;
  const docs: any  = yaml.load(fs.readFileSync(filepath, 'utf8'));
  const workflow = docs[0]
  const data = {
    ...workflow
  }
  try {
    const response = await axios.put(url, data);
    console.log(`Workflow updated, name: ${response.data.name}. id: ${response.data._id}`);
  } catch (error) {
    errorHandler(error);
  }
}

export async function fetchWorkflow(id: string) {
  const url = `${baseUrl}/workflows/${id}`;

  try {
    const response = await axios.get(url);
    console.log(`Workflow: ${JSON.stringify(response.data)}`);
  } catch (error) {
    errorHandler(error);
  }
}


export async function createWorkflowInstance(name: string, params: Map<string, string>) {
  const url = `${baseUrl}/workflows/instances/`;
  const data = {
    workflowName: name,
    params
  }
  try {
    const response = await axios.post(url, data);
    console.log('Success:', response.data);  
  } catch (error) {
    errorHandler(error);
  }
}


export async function applyParams(instanceId: string) {
  const url = `${baseUrl}/workflows/instances/apply/${instanceId}`;

  try {
    console.log('url:', url)
      const response = await axios.get(url);
      console.log('Success:', JSON.stringify(response.data));
  } catch (error) {
      errorHandler(error);
  }
}

