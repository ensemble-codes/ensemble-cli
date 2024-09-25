import axios from 'axios';
import config from '../config';
import { errorHandler } from './utils';

const { baseUrl }  = config;

export async function createWallets(numberOfWallets: number) {
  const url = `${baseUrl}/wallets/`;
  const data = {
      numberOfWallets: numberOfWallets
  };
    try {
      const response = await axios.post(url, data)
      console.log('Success:', response.data);  
    } catch (error) {
      errorHandler(error);
    }
}

export async function createWallet() {
  const url = `${baseUrl}/wallets/`;
  try {
    const response = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${process.env.JWT}`
    }
    });
    console.log('Success:', response.data);  
  } catch (error) {
    errorHandler(error);
  }
}

export async function insertWallet(walletAddress: string) {
  const url = `${baseUrl}/wallets/${walletAddress}`;
  try {
    const response = await axios.post(url);
    console.log('Wallet inserted:', response.data);
  } catch (error) {
    errorHandler(error);  
  }
}

export async function fetchWallet(walletAddress: string) {
  const url = `${baseUrl}/wallets/${walletAddress}`;

  try {
    const response = await axios.get(url);
    console.log('Wallet fetched:', response.data);
  } catch (error) {
    errorHandler(error);
  }
}

export  async function fetchWallets() {
  const url = `${baseUrl}/wallets/`;

  try {
      const response = await axios.get(url);
      console.log('Success:', response.data);
  } catch (error) {
      errorHandler(error);
  }
}

export  async function fetchWalletsByGroup(group: string) {
  const url = `${baseUrl}/wallets/group/${group}`;

  try {
      const response = await axios.get(url);
      console.log('Success:', response.data);
  } catch (error) {
      errorHandler(error);
  }
}

export  async function fetchWalletsGroups() {
  const url = `${baseUrl}/wallets/group/`;

  try {
      const response = await axios.get(url);
      console.log('Success:', response.data);
  } catch (error) {
      errorHandler(error);
  }
}
