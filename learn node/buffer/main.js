var buf = new Buffer(256);
//var buf = new Buffer([10,20,30,40,50]);
//var buf = new Buffer('www.runoob.com','utf-8');
len = buf.write('www.runoob.com');

console.log('写入字节数：'+len);

var content = buf.toString(undefined,0,12);
console.log(content);


var buf1 = new Buffer('www.runoob.com');
var json = buf1.toJSON(buf1);
console.log(json);

var buf2 = new Buffer('数组,');
var buf3 = new Buffer('这里不能是数组');
var buf4 = Buffer.concat([buf2,buf3]);
console.log('buf4 内容：'+buf4.toString());


var buf5 = new Buffer('dabc');
var buf6 = new Buffer('daaaag');
var result = buf5.compare(buf6);
console.log(result);
if(result < 0){
    console.log(buf5 + '在' + buf6 + '之前');
}else if(result == 0){
    console.log(buf5 + '与' + buf6 + '相同');
}else{
    console.log(buf5 + '在' + buf6 + '之后');
}