var adder = function(x) {

  var base = x;
  return function(y) {
    console.log('base:', base);
    return y + base;
  }

};

// var add10 = adder(10);
// console.log(add10(5));

// var add20 = adder(20);
// console.log(add20(5));


for(var i =0; i<5;i++){
  (function(index){
    setTimeout(function(){
      console.log(index);
    }, 5);
  })(i);
}

//this出现的场景

//1.有对象就指向调用对象
//2.没调用对象就指向全局对象
//3.用new构造就指向新对象
//4.通过apply或call或bind来改变this的所指

var myObject = {value: 100};

myObject.getValue = function(){
  console.log(this.value);
  console.log(this);
  return this.value;
};

console.log(myObject.getValue());

var myObj = {value:15};

myObj.getValue = function(){
  console.log(this.value);
  var foo = function(){
    console.log(this.value);
    // console.log(this);
  };
  foo();
  return this.value;
};

console.log(myObj.getValue());

var someClass = function(){
  this.value = 100;
}

var myClass = new someClass();
console.log(myClass.value);

//apply第一个参数时函数运行的作用域，第二个参数为数组
//call，第一个参数同上，后面的参数需要一个一个的列出来


var demo = {value: 100};
var fo = function(){
  console.log(this.value);
};

fo();
fo.apply(demo);
fo.call(demo);

var newFo = fo.bind(demo);
newFo();

//end

