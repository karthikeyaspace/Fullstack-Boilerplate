// mysql init.ts

import mysql from "mysql2";
import config from "../config/env";
import logger from "../utils/logger";

const sqlPool = mysql.createPool({
  connectionLimit: 10,
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
});

sqlPool.getConnection((err, connection) => {
  if (err) {
    logger(`MySQL connection error`, "server/db/mysql.ts", err);
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

export default sqlPool;
