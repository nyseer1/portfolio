// import awsCaBundle from 'aws-ssl-profiles'; //for azure sql cloud servers 
import mysql, { PoolOptions } from 'mysql2';

// Create the connection pool. The pool-specific settings are the defaults
const access: PoolOptions = {
  host: 'localhost',
//   ssl: awsCaBundle, //for azure sql cloud servers 
  user: 'nyseer1024',
  password: 'Darker124@@@',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

// Create the pool and export its promise-based version
//promise means its asynchronous, whenever it gets the info it needs it will continue to run the function seperately from the rest of the program (used to await)
const pool = mysql.createPool(access);
export const db = pool.promise();


