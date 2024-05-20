import 'dotenv/config';

interface Config {
  baseUrl: string;
  debugMode: boolean;
}

const config: Config = {
  baseUrl: process.env.BASE_API_URL || '',
  debugMode: true
};

export default config;