// redis.ts init

import redis from 'redis';
import config from '../config/env';
import logger from '../utils/logger';

const redisClient = redis.createClient({
  host: config.REDIS_HOST,
  port: Number(config.REDIS_PORT),
});

redisClient.on('connect', () => {
  console.log('Redis connected');
});

redisClient.on('error', (err: Error) => {
    logger(`Redis init error`, 'server/db/redis.ts', err);
});

export default redisClient;
