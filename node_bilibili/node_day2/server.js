// 需求创建服务器， 并且能访问文件在本地的路径/ 模仿apache

// 三段代码太繁琐， 直接通过变量的方式， 让其变得灵活多变


// ## 1.如何得到 wwwDir 目录列表中的文件名
// ## 2.如何得到的文件名和目录名替换到template.html中
// 模板引擎
// 只要 你做了这两件事儿， 那这个问题就解决了
var http = require('http')
var fs = require('fs')
var wwwDir = 'C:/tmp/resources'
http.createServer((request, response) => {
  var url = request.url

  var filePath = '/index.html' 
  if(url !== '/') {
    filePath = url
  }
  fs.readFile(( wwwDir + filePath ),(err, data) => {
    if(err) {
     return response.end("404 Not Found~~~")
    }
    else {  
      response.end(data)
    }
  })

  console.log(wwwDir, filePath, wwwDir+filePath)
  console.log("服务器启动");
  
}).listen(3000)