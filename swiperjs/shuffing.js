/**
 * Created by Administrator on 2017/4/10 0010.
 */
(function(){
    'use strict';

    var Shuffing = function(container,params){
        var s = this;
        s.params = params;
        if(s.params.autoplay){
            var autoplayDelay = s.params.autoplay;
        }else{
            return;
        }

        var container = document.getElementById('container'),
            list = document.getElementById('list');
        var index = 1;
        var animated = false;
        var timer;

        (function(){
            timer = setInterval(function(){
                next();
            },autoplayDelay)
        })();
        function animate(offset){
            animated = true;
            var newLeft = parseInt(list.style.left) + offset;
            var time = 300;//位移总时间
            var interVal = 10;//位移间隔时间
            var speed = offset/(time/interVal);
            function go(){
                if((speed<0 && parseInt(list.style.left) > newLeft) || (speed>0 && parseInt(list.style.left) < newLeft)){
                    list.style.left = parseInt(list.style.left) + speed + 'px';
                    setTimeout(go,interVal);
                }else{
                    animated = false;
                    list.style.left = newLeft + "px";

                    if(newLeft < -3000){
                        list.style.left = -600 + "px";
                    }else if(newLeft > -600){
                        list.style.left = -3000 + "px";
                    }
                }
            }
            go();
        }
        var next = function(){
            index += 1;
            if(!animated){
                animate(-600);
            }
        };
    };
    window.Shuffing = Shuffing;
})();