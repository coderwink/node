### 当采用了无分号的代码风格的时候， 只需要注意一下三种情况：
 + 当一行代码是以：
  { ， [, ` 开头 就在前面补一个;就行了 例如  避免语法错误

  ;(function () {
    console.log('hello world')
  })() 

  ;['香蕉', '苹果', '西瓜'].forEach( item => {
    return item
  }) 

  ;`hello`.toString()

### 
 接触的第一个API 读取目录
 var fs = require('fs')
 fs.readdir(wwwDir, (err, files) => {

 })

## art-template 模板引擎
### 核心方法 +
// 基于模板名渲染模板
template(filename, data);

// 将模板源代码编译成函数
template.compile(source, options);

// 将模板源代码编译成函数并立刻执行
template.render(source, data, options);   ==>  template.render('hello {{name}}', { name: 'jack'})
