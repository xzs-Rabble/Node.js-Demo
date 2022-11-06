const fs = require("fs");

const ws = fs.createWriteStream("./2.txt", "utf-8");

ws.write("11111111111111\n");
ws.write("2222222222222\n");
ws.write("333333333333\n");
ws.write("4444444444444444\n");

ws.end();
