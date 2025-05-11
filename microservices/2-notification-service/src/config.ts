import dotenv from 'dotenv'

dotenv.config({});

//Provides a centralized config object to access critical environment variables (email, RabbitMQ, Elasticsearch, etc.).

// if(process.env.ENABLE_APM === '1'){
//   require('elastic-apm-node').start({
//     serviceName:"jobber-notification",
//     serverUrl:
//   })
// }

class Config {
  public NODE_ENV: string | undefined;
  public CLIENT_URL: string | undefined;
  public SENDER_EMAIL: string | undefined;
  public SENDER_EMAIL_PASSWORD: string | undefined;
  public RABBITMQ_ENDPOINT: string | undefined;
  public ELASTIC_SEARCH_URL: string | undefined;



  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.SENDER_EMAIL = process.env.SENDER_EMAIL || '';
    this.SENDER_EMAIL_PASSWORD = process.env.SENDER_EMAIL_PASSWORD || '';
    this.RABBITMQ_ENDPOINT = process.env.RABBITMQ_ENDPOINT || '';
    this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || '';
  }
}

export const config: Config = new Config();



//A Singleton Design Pattern ensures that only one instance of a class is created and shared globally.

// ✅ Single instance is created (new Config()).

// ✅ Globally accessible via import { config } from './path'.

// ✅ Encapsulation of environment variables inside the Config class.

// ✅ Prevents redundant reinitialization of config values.
