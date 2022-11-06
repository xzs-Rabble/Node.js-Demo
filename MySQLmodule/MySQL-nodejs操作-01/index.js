const express = require("express");
const app = express();
const mysql2 = require("mysql2");

app.get("/", async (req, res) => {
  let departName = "采购部";
  //创建连接池
  const config = getDBConfig();
  const promisePool = mysql2.createPool(config).promise();

  //   let depart = await promisePool.query("select * from department");

  /* let depart = await promisePool.query(
    `select * from department where name = "${departName}"`
  ); */

  let depart = await promisePool.query(
    `select * from department where name = ?`,
    [departName]
  );
  //   console.log(depart[0]);
  res.send({
    ok: 1,
    data: depart[0],
  });
});

app.listen(5500);

function getDBConfig() {
  return {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "952736384",
    database: "rbac",
    connectionLimit: 1,
  };
}
