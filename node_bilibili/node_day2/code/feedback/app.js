var fs = require('fs')
var http = require('http')
var template = require('art-template')
var comments = [
  {
    name: "无敌快乐史上最美百变小魔女",
    content: 'wink真tm的帅',
    dataTime: '2015-10-25'
  },
  {
    name: "梦",
    content: 'wink真tm的帅',
    dataTime: '2015-10-25'
  },
  {
    name: "天",
    content: 'wink真tm的帅',
    dataTime: '2015-10-25'
  },
  {
    name: "龙",
    content: 'wink真tm的帅',
    dataTime: '2015-10-25'
  }
]
http.createServer((req, res) => {
  var url = req.url
  if(url === '/') {
    fs.readFile('./view/index.html', (err, data) => {
      if(err) {
        return res.end("files not find")
      }
      else {
        var htmlStr = template.render(data.toString(), {
          comments: comments
        })
        res.end(htmlStr)
      }
    })
  }
  else if(url === '/post') {
    fs.readFile('./view/port.html', (err, data) => {
      if(err) {
        return res.end("files not find")
      }
      else {
        
        res.end(data)
      }
    })
  }
  else {
    fs.readFile('./view/404.html', (err, data) => {
      if(err) {
        return res.end("Not found 404.")
      }else {
        res.end(data)
      }
    })
  }
}).listen(3000)