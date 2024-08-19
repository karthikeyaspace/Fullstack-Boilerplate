// mysql init.ts

import mysql from 'mysql';
import config from '../config/env';

const sqlpool = mysql.createPool({
  connectionLimit: 10,
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
});



export default sqlpool;