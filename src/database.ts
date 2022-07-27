import mysql from 'promise-mysql';
import keys from './keys'

const pool = mysql.createPool(keys.database);

let con: any = null;

pool.then(function(p){
    
    return  p.getConnection();
      
  }).then(function(connection){
    con = connection;
    //pool.Connetionrelease(connection);
    console.log('DB is connected');
  }).then(rows => {
    con.release();
})

export default pool;