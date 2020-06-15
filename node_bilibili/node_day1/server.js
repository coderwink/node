var http = require('http')
var fs = require('fs')
http.createServer((request, response) => {
  var url =  request.url
  if(url === '/plain') {
    response.setHeader('Content-Type','text/plain; charset=utf-8') 
    response.end("后跳剑气")
  }
  else if(url === '/html') {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.end("<p>html箭头指向百度 <a href='www.baidu.com'>百度</a></p>")
  }
  else if(url === '/show') {
    response.setHeader('Content-Type', 'image/jpeg;')
    fs.readFile( './resources/index.html',(err, data) => {
      //data是二进制的数据， 可以通过toString()的方式转换成字串
      if(err) {
        response.end("读取文件失败， 请重试")
      }else {
        console.log();
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end(data.toString())
      }
     
    }) 
  
  }
  else if(url === '/a') {
    fs.readFile('./resources/1.jpg', (err, data) => {
      if(err) {
        response.end("读取文件失败， 请重试")
      }else {
        console.log();
        response.setHeader('Content-Type', 'image/jpeg;')
        response.end(data)
        // response.end()
      }
    })
  }
  
  else {
    response.setHeader('Content-Type','text/plain; charset=utf-8') 
    response.write(" 404 Not Fount ")
    response.end("结束响应")
  }

  //charset = utf-8
  console.log(url)
 
 
 
}).listen(3000)