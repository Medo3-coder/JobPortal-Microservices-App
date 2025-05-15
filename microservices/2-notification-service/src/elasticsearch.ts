import { Client } from '@elastic/elasticsearch';
import { ClusterHealthResponse } from '@elastic/elasticsearch/lib/api/types';
import { winstonLogger } from '@Medo3-coder/jobber-shared'; // Custom Winston logger from shared library
import { config } from '@notifications/config';
import { Logger } from 'winston';


// Initialize the logger for the Elasticsearch notification service
const log: Logger = winstonLogger(
  `${config.ELASTIC_SEARCH_URL}`,          // Elasticsearch endpoint
  'notificationElasticSearchServer',       // Name of the service
  'debug'                                  // Logging level
);


// Instantiate the Elasticsearch client 
const elasticSearchClient = new Client({
  node: `${config.ELASTIC_SEARCH_URL}`
});


/**
 * Continuously attempts to connect to Elasticsearch until successful.
 * Logs the cluster health status when connected.
 */

export async function checkConnection(): Promise<void> {
  let isConnected = false;

  while (isConnected != true) {
    try {
      const health: ClusterHealthResponse = await elasticSearchClient.cluster.health({});
      // Log the cluster's health status (green, yellow, or red)
      log.info(`NotificationService Elasticsearch health status - ${health.status}`);
      // If we get a response, we assume the connection is good and break the loop
      isConnected = true;

    } catch (error) {
      log.error('Connection to Elasticsearch failed. Retrying...');
      log.log('error', 'NotificationService checkConnection() method:', error);
    }
  }
}




/*

What is elasticSearchClient.cluster.health()?
It's a built-in Elasticsearch API that returns the current health status of the cluster.

It gives you a high-level overview: green, yellow, or red.

🔹 What do the health statuses mean?
Status	Meaning
Green :	  All primary and replica shards are allocated (everything is healthy).
Yellow:	  All primary shards are allocated, but one or more replicas are not.
Red   :  	One or more primary shards are not allocated (serious issue).

*/
