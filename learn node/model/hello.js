function hello() {
    var name;
    this.setName = function(oneName){
        name = oneName;
    };
    this.sayHello = function(){
        console.log('hello ' + name);
    };
}

module.exports = hello;