import { winstonLogger } from '@Medo3-coder/jobber-shared';
import { Logger } from 'winston';
import { config } from '@notifications/config';
import client, { Channel, ChannelModel, Connection } from 'amqplib';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationQueueConnection', 'debug');

async function createConnection(): Promise<Channel | undefined> {
    try {
        console.log(config.RABBITMQ_ENDPOINT);
        const connection  = await client.connect(`${config.RABBITMQ_ENDPOINT}`);
        const channel: Channel = await connection.createChannel();
        log.info('Notification server connected to queue successfully...');
        // closeConnection(channel, connection);
        return channel;
    } catch (error) {
        log.log('error', 'NotificationService error createConnection() method:', error);
        return undefined;
    }
}

function closeConnection(channel: Channel, channelModel: ChannelModel): void {
    process.once('SIGINT', async () => {
        await channel.close();
        await channelModel.close();
    });
}

export { createConnection };
