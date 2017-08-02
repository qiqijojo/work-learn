/**
 * Created by Administrator on 2017/7/18 0018.
 */
var fs = require('fs');
var text = fs.readFileSync('eg.csv','utf-8').toString();  //读取文件里面的内容，并转换成字符串
console.log(text);

var arr = text.split('\r\n');     //读取完文件后，对文件内容进行操作，将字符串转换成数组
var min = arr.splice(arr.length-1,1);  //去掉分割出来的空字符串
console.log(arr);
var now = [];
for(var i=0;i<arr.length-1;i++){    //对每一行数据增加一项--新链接
    var ss = arr[i].split(',');
    ss[ss.length] = ss[0]+'/?'+'channelSource='+ss[1]+'&channelBusiness='+ss[2]+'&createFrom=tpa'+new Date().getTime();
    now.push(ss);
}
console.log(now);

var result = now.join('\r\n');  //数组转换成字符串
console.log(result)

// 将转换完的内容写进新的文件里
fs.writeFile('eg2.csv',result);
var newText = fs.readFileSync('eg2.csv','utf-8');
console.log(newText)
