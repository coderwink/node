// http模块
var http = require("http");
// url模块 根据url的地址进行路由 ==> 映射到不同处理程序上
var url = require("url");
//将服务器脚本用函数封装一层， 方便调用


function start(route, handle) {
  
  http.createServer((request,response) => {
    //第一件事情 var postData = ''
    //var postData = ""  //定义一个即将接受传送过来的数据让其为空
    var pathname = url.parse(request.url).pathname;
  //   request.setEncoding("utf-8") // 第二步设置接受数据的编码格式为utf-8

  //   request.addListener("data", (postDataChunk) => {  //-------监听一个个数据块
  //     postData += postDataChunk     // ----目前我的理解就是字符串拼接
  //     console.log("接受过来的数据块:" +postDataChunk+".")
  //   })
  //  request.addListener("end", () => { //当所有的数据都接受完毕才会触发
    route( handle, pathname, response, request)  
  //  })
    
    
  }).listen(8888);
  console.log("服务器启动");
}

//切记切记导出的是一个对象
exports.start = start



