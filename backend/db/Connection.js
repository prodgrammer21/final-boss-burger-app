const mysql = require("mysql");

const pool = mysql.createPool({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b7c212e08dd222",
  password: "a01ec5c3",
  database: "heroku_24fe9c09a6dc6ce",
});

module.exports = (query) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, db) => {
      if (err) {
        console.log("Database Error: ", err);
        reject(err);
      } else {
        db.query(query, (err, results) => {
          if (err) {
            console.log("Query Error: ", err);
            reject(err);
          } else {
            resolve(results);
          }

          db.release();
        });
      }
    });
  });
};
