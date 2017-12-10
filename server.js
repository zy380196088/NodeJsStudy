var fs = require('fs')

var mkDir = ['css', 'fonts', 'img', 'module']
// 创建目录
for (var i = 0; i < mkDir.length; i++) {
  fs.mkdir(mkDir[i], function (err) {
    if (err) {
      return console.error(err);
    }
  });
}

// 读取 index.html 文件创建 index2.html 文件
fs.readFile('index.html', 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  fs.appendFile('index2.html', data, 'utf8', function (err) {
    if (err) {
      return console.error(err);
    }
  });
});