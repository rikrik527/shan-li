require('../sass/app.scss');
var $ = require('jquery');


var obj = require('./getall');




var shanTalking = require('./shanConversation');



var location = require('./location');
var awake = require('./spa');
window.onload = function() {
    awake.facebook.addScript();
    awake.story.shanBtn();
    awake.call.shanAppear();
    awake.app.talkingDialog();
    awake.image.show();
    awake.video.section1();

    // awake.shanLiAwaken.story();
    awake.command.nameSvg();
    awake.command.add('canvas', 'canvas', 'new-canvas');
    awake.shanLiAwaken.title();

    awake.button.select('.awake').onclick = function() {
        if (awake.command.awakeFirst().style.top == "-100%") {
            console.log('its -100%');
        } else {
            awake.command.awakeFirst().style.top = '0%';
        }
        console.log('yesyeysyeysyeysyeyes');
    }
    awake.button.select('.prologue').onclick = function() {
        console.log('yesyeysyeysyeysyeyes');
    };
    awake.button.select('.location').onclick = function() {
        console.log('yesyeysyeysyeysyeyes');
    };
    awake.button.select('.epilogue').onclick = function() {
        console.log('yesyeysyeysyeysyeyes');
    };
    awake.command.imageHueRotate();
    awake.app.imageSlider();
    awake.app.todoList();
    awake.app.outouch();
}
awake.app.calendarApp();
var btn = obj.get('.btn-next');
btn.innerHTML = '<pre>&#10597;</pre>';
btn.insertAdjacentHTML('afterend', '<div class="btn-back"></div>');
var btnBack = obj.get('.btn-back');
btnBack.style.transition = 'all 1s ease-in-out';
btnBack.style.display = 'none';
btnBack.innerHTML = '<pre>&#10595</pre>';
var click = 1;
btn.onclick = (function() {
    if (click = 5) click = 1;
    return function() {
        switch (click) {
            case 1:
                awake.command.awakeFirst().style.top = '-100%';
                console.log(click);
                break;
            case 2:
                awake.command.awakeSecond().style.top = '-100%';
                console.log(click);
                break;
            case 3:
                awake.command.prologue().style.top = '-100%';
                console.log(click);
                break;
            case 4:
                awake.command.location().style.top = '-100%';
                console.log(click);
                break;
            case 5:
                awake.command.epilogue().style.top = '-100%';
                btn.style.display = 'none';
                btnBack.style.display = 'block';
                console.log(click);
                break;
        }
        click++;
        btnBack.onclick = function() {

            awake.command.awakeFirst().style = '0%';
            awake.command.awakeSecond().style = '0%';
            awake.command.prologue().style = '0%';
            awake.command.location().style = '0%';
            awake.command.epilogue().style = '0%';
            btnBack.style.display = 'none';
            btn.style.display = 'block';
        }
    }
})();

// window.onresize = function() {
//     awake.canvas.resize();
// }
// awake.canvas.arc(50, 10, 50, 0, Math.PI / 180);




// window.onscroll = function(){
//     var mainBc = obj.get('.main-boxcontrol');
//     var extend = "<div class='extend'></div>";
//     if(mainBc.clientHeight > window.innerHeight){
//         console.log('oh yes its true');
//         mainBc.innerHTML += extend;
//     }
// }

var idleTime = 0;
document.onmousemove = function() {

    clearInterval(timerIncrease);
    idleTime = 0;
};
document.onkeypress = function() {
    clearInterval(timerIncrease);
    idleTime = 0;
};
document.ontouchstart = function() {
    clearInterval(timerIncrease);
    idleTime = 0;

};
document.ontouchend = function() {

}
document.onmousedown = function() {

}
document.onmouseup = function() {

}

function timerIncrease() {
    idleTime += 1;
    if (idleTime > 30) {
        // shanTalking.shanTalking();
        if (shanTalking) {
            idleTime = 0;
        }
    }

}




var iframeProperty = ['allow-forms', 'allow-modals', 'allow-orientation-lock', 'allow-pointer-lock', 'allow-popups', 'allow-popups-to-escape-sandbox', 'allow-presentation', 'allow-same-origin', 'allow-scripts', 'allow-top-navigation', 'allow-top-navigation-by-user-activation'];
// var iframe = obj.get('.iframe');


// var darkShadow = iframe.contentWindow.document.querySelector('.shan-li-boxcontrol');
// var x = document.importNode(darkShadow, true);
// obj.get('shan-btn').appandChild(x);