var obj = require('./getall');

var source = require('../images/shanli.png');
var mp4 = require('../video/section1.mp4');
var shanLi1 = require('../images/shanli1.png');
var shanLi2 = require('../images/shanli2.png');
var shanLi3 = require('../images/shanli3.png');
// var lazyload = require('lazyload');


var awake = awake || {};
awake.image = {
    show: function() {
        var shanli = obj.getId('shan-li-image');
        shanli.src = source;

        shanli.onmouseover = function() {
            shanli.classList.add('shan-img-ani');
        }
        shanli.onmouseout = function() {
            shanli.classList.remove('shan-img-ani');
        }

    }
}
awake.video = {
    section1Mp4: require('../video/section1.mp4'),

    section1: function(type) {
        this.type = type;
        var video = obj.getId('lab');
        var labMp4 = obj.getId('lab-mp4');
        var labOgg = obj.getId('lab-ogg');
        labMp4.src = mp4;


        video.play();
        video.loop = true;
        console.log('playing mp4 now')


    }
}
awake.command = {
    count: 0,
    awakeFirst: function() {
        return document.querySelector('.awake-first-section')
    },
    awakeSecond: function() {
        return document.querySelector('.awake-second-section')
    },
    awakeThird: function() {
        return document.querySelector('.awake-third-section')
    },
    awakeFourth: function() {
        return document.querySelector('.awake-fourth-section')
    },
    awakeFifth: function() {
        return document.querySelector('.awake-fifth-section')
    },
    prologue: function() {
        return obj.get('.prologue-first-section');
    },
    location: function() {
        return obj.get('.location-first-section');
    },
    epilogue: function() {
        return obj.get('.epilogue-first-section');
    },

    // imageHueRotate: function() {
    //     var changeY = 0,
    //         changeX = 0;


    //     document.onmouseover = function(e) {
    //         var target = e.target;
    //         var shanLiImage = obj.getId('shan-li-image');
    //         var moveY = e.clientY / 10;
    //         var moveX = e.clientX / 10;
    //         console.log(moveY, moveX)
    //         changeY += moveY;
    //         changeX += moveX;
    //         console.log(changeY, changeX)
    //         var total = changeX - changeY * 0.5;
    // if (e.movementX > 0) {
    //     moveX / 5
    //     console.log('right', moveX);
    // } else {
    //     moveX / 10;
    //     console.log('left', moveX);
    // }
    // if (e.movementY < 0) {
    //     moveY / 5;
    //     console.log('up')
    // } else {
    //     moveY / 10;
    //     console.log('down');
    // }
    //     if (target.id === "shan-li-image") {
    //         console.log('pointed');
    //         shanLiImage.style.cssText = 'filter:hue-rotate(240deg);transform:rotatex(' + moveX + 'deg)rotatey(' + moveY + 'deg)rotatez(20deg)';
    //         console.log(window.getComputedStyle(shanLiImage).getPropertyValue('rotateX'), moveX, moveY)

    //     } else {
    //         shanLiImage.style.cssText = 'filter:hue-rotate(0deg);transform:rotatex(0deg)rotatey(0deg)';
    //     }
    // }





    // },

    nameSvg: function() {
        var svg = '<svg width="150" height="200" viewBox="0 0 300 900"><pattern id="rain" viewBox="100 100 100 100" patternUnits="userSpaceOnUse" width="150" height="200" x="0" y="150"><image xlink:href="https://github.com/rikrik527/shan-li/src/images/rain.gif" width="100" height="150"/></pattern><text text-anchor="middle" x="50%" y="50%" dy=".35em" class="text">雨珊</text></svg>';
        var imgShan = obj.get('.the-game');
        imgShan.innerHTML = svg;

    },
    add: function(ele, objs, cls) {
        this.ele = ele;

        this.cls = cls;
        this.objs = objs;

        this.ele = obj.create(objs);
        var shanBtn = obj.get('.shan-btn');
        shanBtn.appendChild(this.ele);
        this.ele.classList.add[this.cls];


    },
    // canvasSize: function(ele, selector) {
    //     this.ele = ele;
    //     this.selector = selector;
    //     var canvas = document.getElementsByTagName('canvas');
    //     canvas.class = 'new-canvas';
    //     this.ele = obj.get(selector);
    //     canvas.clientWidth = this.ele.clientWidth;
    //     canvas.clientHeight = this.ele.clientHeight;
    //     window.onresize = function() {
    //         canvas.clientWidth = this.ele.clientWidth;
    //         canvas.clientHeight = this.ele.clientHeight;
    //     }
    // }



}
awake.button = {
    select: function(select) {
        return obj.get(select);
    }
}
awake.shanLiAwaken = {
    year: '西元二零二七年',
    location: '位於:24.09.25.98北,120.38.44.90東,拔海高度90公尺的一間老舊的生化人研究中心',
    event: '發生了電磁波亂流事件,在一陣混亂之中,雨珊生化人啟動了....',
    story: function() {

    },
    zoom: function(elem, cls, type, value, time) {
        this.time = time;
        this.elem = elem;
        this.cls = cls;
        this.type = type;
        this.value = value;
        this.elem = obj.get(cls);
        this.elem.style.cssText = ';background-size:100%;background-position:center;';
        setTimeout(() => {

            this.elem.style[this.type] = this.value;
            console.log('actived')
        }, this.time);
    },
    title: function() {

    }





}
awake.app = {
        calendar: '<div class="month"><span class="close">X</span><ul><li class="prev">❮</li><li class="next">❯</li><li class="full-month-cycle">August<br><span class="full-year-cycle">2018</span></li></ul></div><ul class="weekdays"><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li></ul><ul class="days"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li></ul>',

        calendarApp: function() {
            var iconPersonal = obj.get('.icon-personal');
            var div = obj.create('div');
            div.className = 'calender';
            div.style.display = 'none';
            iconPersonal.insertAdjacentElement('afterend', div);
            div.innerHTML = this.calendar;
            var close = obj.get('.close');
            close.addEventListener('click', closeIt, false);
            iconPersonal.addEventListener('click', showIt, false);

            function showIt() {
                console.log('clicked show')
                var cal = obj.get('.calender');
                cal.style.display = 'block';
            }

            function closeIt() {
                console.log('clicked off')
                var cal = obj.get('.calender');
                cal.style.display = 'none';
            }

        },

        container: '<div class="img-outline"><img class="img-change" width="100px" height="160px" alt="shan-li-1"><img class="img-change2" width="100px" height="160px" alt="shan-li-2"><img class="img-change3" width="100px" height="160px" alt="shan-li-3"></div><div class="right-arrow">❯</div><div class="left-arrow">❮</div>',
        imageSlider: function() {

            var shanBtn = obj.get('.shan-btn');
            shanBtn.insertAdjacentHTML('afterbegin', '<div class="img-slider-boxcontrol"></div>');
            var imgSliderBc = obj.get('.img-slider-boxcontrol');
            imgSliderBc.innerHTML = this.container;
            var image = obj.get('.img-change');
            var image2 = obj.get('.img-change2');
            var image3 = obj.get('.img-change3');


            var array = [null, -100, 0, 100],
                array2 = [null, 0, 100, -100],
                array3 = [null, 100, -100, 0];
            image.src = shanLi1;
            image2.src = shanLi2;
            image3.src = shanLi3;
            image.style.left = '-100%';
            image2.style.left = '0%';
            image3.style.left = '100%';
            var right = obj.get('.right-arrow');
            var left = obj.get('.left-arrow');
            var click = 1;


            right.onclick = (function() {

                return function() {
                    switch (click) {
                        case 1:
                            image.style.left = array[click] + '%';
                            image2.style.left = array2[click] + '%';
                            image3.style.left = array3[click] + '%';
                            console.log('excuted');
                            break;
                        case 2:
                            image.style.left = array[click] + '%';
                            image2.style.left = array2[click] + '%';
                            image3.style.left = array3[click] + '%';
                            console.log('case 2')
                            break;
                        case 3:
                            image.style.left = array[click] + '%';
                            image2.style.left = array2[click] + '%';
                            image3.style.left = array3[click] + '%';
                            console.log('case 3', array, array2, array3);
                            break;
                    }
                    click++;
                    if (click > 3) {
                        click = 1;
                        console.log('back to 0');
                    }
                    if (array[click] === -100) {
                        console.log('array === 100')
                        image.style.zIndex = '-9999';
                    } else {
                        image.style.zIndex = '1';
                        console.log('zindex is 1')
                    }
                    if (array2[click] === -100) {
                        image2.style.zIndex = '-9999';
                    } else {
                        image2.style.zIndex = '1';
                    }
                    if (array3[click] === -100) {
                        image3.style.zIndex = '-9999';
                    } else {
                        image3.style.zIndex = '1';
                    }
                    console.log(click)
                }


            })();

            left.onclick = (function() {

                return function() {
                    switch (click) {
                        case 1:
                            image.style.left = array[click] + '%';
                            image2.style.left = array2[click] + '%';
                            image3.style.left = array3[click] + '%';
                            console.log('excuted');
                            break;
                        case 2:
                            image.style.left = array[click] + '%';
                            image2.style.left = array2[click] + '%';
                            image3.style.left = array3[click] + '%';
                            console.log('case 2')
                            break;
                        case 3:
                            image.style.left = array[click] + '%';
                            image2.style.left = array2[click] + '%';
                            image3.style.left = array3[click] + '%';
                            console.log('case 3');
                            break;
                    }
                    click--;
                    if (click < 1) {
                        click = 3;
                        console.log('back to 1');
                    }
                    if (array[click] === 100) {
                        console.log('array === 100')
                        image.style.zIndex = '-9999';
                    } else {
                        image.style.zIndex = '1';
                        console.log('zindex is 1')
                    }
                    if (array2[click] === 100) {
                        image2.style.zIndex = '-9999';
                    } else {
                        image2.style.zIndex = '1';
                    }
                    if (array3[click] === 100) {
                        image3.style.zIndex = '-9999';
                    } else {
                        image3.style.zIndex = '1';
                    }
                    console.log(click)
                }


            })();



        },

        todoContainer: '<div id="my-div" class="header"><h2 style:"margin:5px">To Do List</h2><input type="text" class="input-todo id="my-input" placeholder="Title.."><span class="add-btn">Add</span></div><ul id="my-ul"><li class="checked">Add your todo list</li><li>example..</li></ul>',
        todoList: function() {
            var todoL = obj.get('.todo-list');
            var todo = obj.create('div');
            todo.className = 'todo-append';
            todoL.insertAdjacentElement('afterend', todo);
            todo.innerHTML = this.todoContainer;
            todo.style.display = 'none';
            todoL.addEventListener('click', showTodo);

            function showTodo() {
                let todo = obj.get('.todo-append');
                todo.style.display = 'block';
            }

            function hideTodo() {
                let todo = obj.get('.todo-append');
                todo.style.display = 'none';
            }
            var li = document.getElementsByTagName('li')[1];
            var i;
            for (i = 0; i < li.length; i++) {
                var span = obj.create('span');
                console.log('span')
                var txt = document.createTextNode('\u00D7');
                span.className = 'close-todo';
                span.appendChild(txt);
                li[i].appendChild(span);
            }
            // click on a close button to hide the current list item
            var closeTodo = obj.get('.close-todo');
            var i;
            for (i = 0; i < closeTodo.length; i++) {
                closeTodo[i].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = 'none';
                }
            }
            var ul = obj.get('ul');
            ul.addEventListener('click', function(e) {
                if (e.target.tagName === 'LI') {
                    e.target.classList.toggle('checked');
                    console.log('tagname is li');
                }
            }, false);
            var addBtn = obj.get('.add-btn');
            addBtn.onclick = newElement();

            function newElement() {
                var li = obj.create('li');
                var inputVal = obj.getId('my-input').value;
                var text = document.createTextNode(inputVal);
                li.appendChild(text);
                if (inputVal === '') {
                    let placeholder = obj.getId('my-input').placeholder = 'you must write something!';
                } else {
                    obj.getId('my-ul').appendChild(li);
                }
                obj.getId('my-input').value = '';
                var span = obj.create('span');
                var txt = document.createTextNode('\u00D7');
                span.className = 'close-todo';
                span.appendChild(txt);
                li.appendChild(span);
                for (i = 0; i < closeTodo.length; i++) {
                    closeTodo[i].onclick = function() {
                        var div = this.parentElement;
                        div.style.display = 'none';
                        console.log('this is the final section of code');
                    }
                }
            }

        },

        talkingDialog: function() {
            var div = obj.create('div');
            var div2 = obj.create('div');
            div.className = 'shan-talk';
            div2.className = 'shan-conversation';
            var shanBtn = obj.get('.shan-btn');
            shanBtn.appendChild(div);
            div.appendChild(div2);


        }
    }
    // awake.canvas = {
    //     overflow: obj.get('.overflow'),
    //     canvas: obj.getId('canvas'),
    //     ctx: this.canvas.getContext('2d'),
    //     width: this.width,
    //     height: this.height,
    //     resize: function() {
    //         this.canvas.width = this.overflow.clientWidth;
    //         this.canvas.height = this.overflow.clientHeight;
    //     },
    //     arc: function(x, y, radius, end, start) {
    //         this.x = x;
    //         this.y = y;
    //         this.radius = radius;
    //         this.end = end;
    //         this.start = start;
    //     }



// }
awake.story = {
    shanBtn: function() {
        var shanBtn = obj.create('div');
        shanBtn.className = 'shan-btn';
        var awakeFS = obj.get('.awake-first-section');
        awakeFS.insertAdjacentElement('afterbegin', shanBtn);
    }
}
awake.call = {
    shanLi: "<div class='shan-li-hair1'></div><div class='shan-li-hair2'></div><div class='shan-li-hair3'></div><div class='shan-li-head'><div class='shan-li-eyebrow'></div><div class='shan-li-eyebrow2'></div><div class='shan-li-eye'><div class='shan-li-eyeball'></div></div><div class='shan-li-eye2'><div class='shan-li-eyeball2'></div></div><div class='shan-li-nose'></div><div class='shan-li-lips'></div><div class='shan-li-mouth'><div class='shan-li-teeth'></div></div><div class='shan-li-lips2'></div></div><div class='shan-li-neck'></div><div class='shan-li-body'><div class='shan-li-mimi'></div><div class='shan-li-mimi2'></div></div><div class='shan-li-arm'></div><div class='shan-li-arm2'></div><div class='shan-li-lowarm'><div class='shan-li-hand'></div></div><div class='shan-li-lowarm2'><div class='shan-li-hand2'></div></div><div class='shan-li-stomache'></div><div class='shan-li-peegu'></div><div class='shan-li-leg'></div><div class='shan-li-leg2'></div><div class='shan-li-lowleg'><div class='shan-li-feet'></div></div><div class='shan-li-lowleg2'><div class='shan-li-feet2'></div></div><div class='shan-li-book'><div class='shan-li-book-left'></div><div class='shan-li-book-right'></div><div class='shan-li-book-middle'></div></div>",
    shanAppear: function() {
        var shanBtn = obj.get('.shan-btn');
        shanBtn.insertAdjacentHTML('afterend', '<article class="shan-li-boxcontrol"></article>');
        var shanBc = obj.get('.shan-li-boxcontrol');
        shanBc.innerHTML = this.shanLi;

    }
}
awake.facebook = {
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js",
    addScript: function() {
        var script = obj.create('script');
        script.src = this.jquery;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    }
}
awake.command.awakeFirst().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeSecond().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeThird().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeFourth().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeFifth().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.prologue().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.location().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.epilogue().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
module.exports = awake;