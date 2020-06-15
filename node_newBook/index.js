var serve = require("./serve")

var router= require("./router")

var requestHandle = require("./requestHandle")


var handle = {} 
//新大陆   JavaScript中的点声明函数 和 [] 声明函数的理解
// handle['a'] = function fnc1() {console.log("我是函数一");
// }
// handle['b'] = function fnc2() {console.log("我是函数二")}
handle['/'] = requestHandle.start
handle['/start'] = requestHandle.start
handle['/upload'] = requestHandle.upload
handle['/show'] = requestHandle.show


serve.start(router.route, handle)