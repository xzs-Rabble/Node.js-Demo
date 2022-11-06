let str = "name=zhangsan&age=100&location=dalian";

let querystring = require("querystring");

let obj = querystring.parse(str);

console.log(obj);

let myobj = {
  a: 1,
  b: 2,
  c: 3,
};

let mystr = querystring.stringify(myobj);
console.log(mystr);

let str1 = "id=3&city=北京&url=https://www.baidu.com";
let escaped = querystring.escape(str1);
console.log(escaped);
