var http = require('http')
var fs = require('fs')
var wwwDir = 'C:/tmp/resources'
http.createServer((request, response) => {
  var url = request.url


  fs.readFile('./template.html',(err, data) => {
    if(err) {
     return response.end("404 Not Found~~~")
    }
    else {  
      fs.readdir(wwwDir, (err, files) => {
        if(err) {
          return response.end('can not find www dir.')
        }
        console.log(files); 
      })
      response.end(data)
    }
  })

  
}).listen(3000)