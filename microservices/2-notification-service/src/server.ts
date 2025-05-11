import 'express-async-errors'
import http from 'http';

import { winstonLogger } from '@Medo3-coder/jobber-shared';
import { config } from '@notifications/config';
import { Logger } from 'winston';
import { Application } from 'express';
import { healthRoutes } from '@notifications/routes';



const SERVER_PORT = 4001;

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationServer', 'debug');

export function start(app: Application): void {
  startServer(app);
  // http://localhost:4001/notification-routes
  app.use('', healthRoutes())
  startQueues();
  startElasticSearch();
}

async function startQueues(): Promise<void> {

}

// initializes Elasticsearch (for logs/monitoring).
function startElasticSearch(): void {

}


function startServer(app: Application): void {
  try {
    const httpServer: http.Server = new http.Server(app);
    log.info(`Worker with process id of ${process.pid} on notification server has started`)
    httpServer.listen(SERVER_PORT, () => {
      log.info(`Notification server running on port ${SERVER_PORT}`);
    });
  } catch (error) {
    log.log('error', 'NotificationService startServer() method:', error)
  }
}
