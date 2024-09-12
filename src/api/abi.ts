import axios from 'axios';
import fs from 'fs';

import config from '../config';
import { errorHandler } from './utils';
const { baseUrl }  = config;


export async function uploadAbi(name: string, filepath: string) {
  const url = `${baseUrl}/abi/`;
  const abi: any  = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  // const abi = docs[0]
  // console.log('docs:', docs);
  const data = {
    name,
    abi
  }
  console.log('data:', data.abi);
  try {
    const response = await axios.post(url, data);
    console.log('Success:', response.data);  
  } catch (error) {
    errorHandler(error);
  }
}