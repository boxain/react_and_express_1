import config from '../../config/config';
import mysql from 'mysql';

const connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: config.mysql_host,
  user: config.mysql_user,
  password: config.mysql_pass,
  database: config.mysql_database,
  port: config.mysql_port
});

/* GET */
const selectNote = () => {
  return new Promise((resolve,reject) => {
    connectionPool.getConnection((connectionErr , connection) => {
      if(connectionErr){
        reject(connectionErr);
      }else{
        connection.query(
          'SELECT * FROM Note' , (err , result) => {
            if(err){
              console.log('SQL error:',err);
              reject(err);
            }else{
              resolve(result);
            }
            connection.release();
          }
        );
      }
    });
  });
};

/* POST */
const insertNote = (insertValue) => {
  return new Promise((resolve,reject) => {
    connectionPool.getConnection((connectionErr,connection) => {
      if(connectionErr){
        reject(connectionErr);
      }else{
        connection.query('INSERT INTO Note SET ?',insertValue,
        (err,result)=>{
          if(err){
            console.log('SQL error',err);
            reject(err);
          }else if(result.affectedRows===1){
            resolve(`sucess ! note_id: ${result.insertId}`)
          }else{
            console.log('沒有更動到資料');
            reject('no change...');
          }
          connection.release();
        });
      }
    });
  });
};


/* DELETE */
const deleteNote = (delete_id) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionErr, connection) => {
      if (connectionErr) {
        reject(connectionErr);
      } else {
        connection.query('DELETE from Note WHERE id = ?', delete_id,
          (err, result) => {
            if (err) {
              console.log('SQL error', err);
              reject(err);
            } else if (result.affectedRows === 1) {
              resolve(`sucess ! note_id: ${delete_id}`)
            } else {
              console.log('沒有更動到資料');
              reject('no change...');
            }
            connection.release();
          });
      }
    });
  });
};


export default {selectNote,insertNote,deleteNote};
