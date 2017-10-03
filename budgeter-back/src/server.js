import config from '../config';
import mysql from 'mysql';

const dbConn = mysql.createConnection(config.mysqlConfig);

dbConn.connect(err => {
    if (err) console.error(err)
    else console.log('connected');
});

dbConn.query('SELECT * from budgets', (error, results, fields) => {
    console.log({error, results, fields});
});