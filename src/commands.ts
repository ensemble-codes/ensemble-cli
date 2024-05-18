
import axios from 'axios';
import 'dotenv/config';

const baseApi = process.env.BASE_API_URL

export async function createWallets(numberOfWallets: number) {
  const url = `${baseApi}/wallets/`;
  const data = {
      numberOfWallets: numberOfWallets
  };

  try {
      const response = await axios.post(url, data);
      console.log('Success:', response.data);
  } catch (error) {
      if (axios.isAxiosError(error)) {
          console.error('Error making the request:', error.response?.data);
      } else {
          console.error('Unexpected error:', error);
      }
  }
}

export  async function fetchWalletsByGroup(group: string) {
  const url = `${baseApi}/wallets/group/${group}`;

  try {
      const response = await axios.get(url);
      console.log('Success:', response.data);
  } catch (error) {
      if (axios.isAxiosError(error)) {
          console.error('Error making the request:', error.response?.data);
      } else {
          console.error('Unexpected error:', error);
      }
  }
}
