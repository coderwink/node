var exec = require("child_process").exec
var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");


function start(response, request) {
  console.log("start开始了");
  // exec("ls", function (error, stdout, stderr) {  // error---错误， stderr----标准错误， stdout----标准输出
  //   response.writeHead(404, {"Content-Type": " charset=utf-8 " })
  //   response.write(JSON.stringify(stdout))
  //   response.end()
  // })
  // exec("find /",
  //   { timeout: 10000, maxBuffer: 20000 * 1024 },
  //   function (error, stdout, stderr) {
  //     response.writeHead(200, { "Content-Type": "text/plain" });
  //     response.write(stdout);
  //     response.end();
  //   });
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/show" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end(); 
}
function upload(response, request) {
  var form = new formidable.IncomingForm();
  console.log("关于parse");
  form.parse(request, function(err, fields, files) {
    console.log("paring开始执行");
    fs.renameSync(files.upload.path, "/tmp/text.png")
    response.writeHead(404, { "Content-Type": "text/html" })
    response.write("接受img标签")
    response.write("<img src='/show/'/>")
    response.end()
    
  })
 
 

}
function show(response) {
  console.log("请求展示已被调用")
  fs.readFile('/tmp/text.png', "binary",function(err, file) {
    if(err) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(err + "\n");
      response.end();
    }
    else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  })
}
exports.start = start
exports.upload = upload
exports.show = show