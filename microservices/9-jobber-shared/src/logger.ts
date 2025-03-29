import winston, { Logger } from "winston";

// Importing Elasticsearch transport for Winston logging
import {
  ElasticsearchTransport,  // Transport for sending logs to Elasticsearch
  ElasticsearchTransformer, // Function to transform log data into Elasticsearch format
  LogData,  // Type for log data structure
  TransformedData // Type for transformed log data format
} from "winston-elasticsearch";


/**
 * Function to transform log data into the Elasticsearch-compatible format.
 * @param logData - The log data to be transformed.
 * @returns Transformed log data in Elasticsearch format.
 */

export const esTransformer = (logData: LogData): TransformedData => {
  return ElasticsearchTransformer(logData);
}


/**
 * Function to create a Winston logger with Console and Elasticsearch transports.
 * @param elasticsearchNode - The Elasticsearch node URL.
 * @param name - The name of the logging service.
 * @param level - The logging level (e.g., 'info', 'error', 'warn').
 * @returns Logger instance configured with Console and Elasticsearch transports.
 */
export const winstonLogger = (elasticsearchNode: string, name: string, level: string): Logger => {
  // Define configuration options for different transports
  const options = {
    // Console transport configuration
    console: {
      level,              // Log level (e.g., 'info', 'error')
      handleExceptions: true, // Capture and log unhandled exceptions
      json: false,        // Disable JSON formatting for console logs
      colorize: true,     // Enable colored output in the console
    },

    // Elasticsearch transport configuration
    elasticsearch: {
      level,
      transformer: esTransformer, // Function to transform logs into Elasticsearch format
      clientOpts: {
        node: elasticsearchNode,  // URL of the Elasticsearch node
        log: level,               // Log level for Elasticsearch client
        maxRetries: 2,            // Maximum number of retry attempts for failed log requests
        requestTimeout: 10000,    // Timeout for Elasticsearch requests (in milliseconds)
        sniffOnStart: false       // Disable sniffing of Elasticsearch nodes at startup
      }
    }
  };

  // Create an Elasticsearch transport instance with the specified options
  const esTransport: ElasticsearchTransport = new ElasticsearchTransport(options.elasticsearch);
  // Create a Winston logger instance
  const logger: Logger = winston.createLogger({
    exitOnError: false, // Prevent process exit on logger errors
    defaultMeta: { service: name },
    transports: [
      new winston.transports.Console(options.console), // Console transport
      esTransport // Elasticsearch transport
    ]  });
  return logger;
}
