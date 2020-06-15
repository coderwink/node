function route(handle, pathname, response, request) {

  console.log("传入一个路由当前的请求路径:" +pathname);
  if(typeof handle[pathname] === 'function') {    // typeof  ----> 返回的是字符串类型   
     handle[pathname](response, request)
  }else {
    response.writeHead(404, {"Content-Type": "text/plain; charset=utf-8 " })
    response.write("404 Not found");
    response.end()
  }
}
exports.route = route