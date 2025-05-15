import { winstonLogger } from '@Medo3-coder/jobber-shared'; // Custom Winston logger from shared library
import { Logger } from 'winston';
import { config } from '@notifications/config';
import express, { Express } from 'express';
import { start } from '@notifications/server';

// Initialize the logger for the Elasticsearch notification service
const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationElasticSearchServer', 'debug');


function Initialize(): void {
  const app: Express = express();
  start(app);
  log.info('Notification Service Initialized');
}
Initialize();
