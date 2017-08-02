
//第一种方法
$.getJSON('test.json',function(allDate){
    var html = ejs.render( $('#module').html(),{ data:allDate } );
    console.log(allDate);
    console.log(html);
    //$('#show').html(html);
    $('#show').append(html);//这两行代码结果一样
});



//第二种方法

//$.getJSON('test.json',function(allDate){
//    var complate = ejs.compile($('#module').html());
//    var html = complate({data:allDate});
//    $('#show').html(html);
//});