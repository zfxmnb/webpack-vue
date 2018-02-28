var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'rm-uf6tal135iy7gkj15o.mysql.rds.aliyuncs.com',
    user     : 'xmiles',
    password : 'k5De77aby0MX9N96',
    database : 'monitor'
  });
   
  connection.connect();
  
  var  sql = 'SELECT * FROM stat_fanli_monitor_errors where url like "http://xmiles.cn/miles_service/pages/checkin_coin/index.jsp%" order by ctime desc limit 2';

const request = ()=>{
    return new Promise((resolve,reject)=>{
        connection.query(sql, (error, results, fields)=>{
            if (error) {throw error;reject(error)}else{
                //console.log('results: ', results);
                resolve(results)
            };
        });
    })
}

  module.exports = request