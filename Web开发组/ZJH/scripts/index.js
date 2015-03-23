var minNum = 0;
var maxNum = 0;
var randomNum = 0;
var Num1;
var Num2;
var Num3;
var pro = 0;
var origin = 0;
var cardName;
var cardClassName;
var ring = 0;
var dropOrder = 0;
var dropId = 0;
var lock = 0;

minNum=0;
maxNum=800;
randomMath();

$("body").keydown(function(event){
    console.log(event.which);
	if (event.which == 32 && lock == 0) {
	  Start();
	}
});

function randomMath () {
  randomNum = minNum + (Math.round(Math.random() * (maxNum - minNum)));
  Num1 = Math.floor(randomNum / 100);
  Num2 = Math.floor(randomNum / 10) % 10; 
  Num3 = randomNum % 10;
}

function hasClassName(inElement, inClassName)
{
  var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
  return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName)
{
  if (!hasClassName(inElement, inClassName))
    inElement.className = [inElement.className, inClassName].join(' ');
}

function removeClassName(inElement, inClassName)
{
  if (hasClassName(inElement, inClassName)) {
    var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
    var curClasses = inElement.className;
    inElement.className = curClasses.replace(regExp, ' ');
  }
}

function toggleClassName(inElement, inClassName)
{
  if (hasClassName(inElement, inClassName))
    removeClassName(inElement, inClassName);
  else
    addClassName(inElement, inClassName);
}

function toggleShape()
{
  var shape = document.getElementById('shape');
  if (hasClassName(shape, 'ring')) {
    removeClassName(shape, 'ring');
    addClassName(shape, 'cube');
  } else {
    removeClassName(shape, 'cube');
    addClassName(shape, 'ring');
  }

  // Move the ring back in Z so it's not so in-your-face.
  var stage = document.getElementById('stage');
  if (hasClassName(shape, 'ring'))
    stage.style.webkitTransform = 'translateZ(-200px)';
  else
   stage.style.webkitTransform = '';
}

function checkoutNum (number1, number2) {
  var classname = "ringShow_" + number2;
  var classnameLong= "longShow_" + number2;
  var cubeclassname = "cubeShow" + number1;
  removeClassName(shape, cubeclassname);
  if (pro == 2)
	  addClassName(shape, classnameLong);
  else
	  addClassName(shape, classname);
  var deg = (-36 * parseInt(number2));
  shape.style["transform"]="rotateY(" + deg +"deg)";
}

function checkoutCube (number1, number2) {
  var classname = "ringShow_" + number1;
  var cubeclassname = "cubeShow" + number2;
  removeClassName(shape, classname);
  addClassName(shape, cubeclassname);
}

function drop0() {
  cardName = "card0";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop1() {
  cardName = "card1";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop2() {
  cardName = "card2";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop3() {
  cardName = "card3";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop4() {
  cardName = "card4";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop5() {
  cardName = "card5";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop6() {
  cardName = "card6";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop7() {
  cardName = "card7";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop8() {
  cardName = "card8";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function drop9() {
  cardName = "card9";
  cardClassName = "fall";
  addClassName(document.getElementById(cardName), cardClassName);
}

function Start() {
  lock=1;
  if (pro == 0) {
	toggleShape();
    randomMath();
    checkoutNum(origin, Num1);
    setTimeout(function() {
	  cardName = "card" + Num1;
	  cardClassName = "jump" + Num1;
	  addClassName(document.getElementById(cardName), cardClassName);
	  setTimeout(function() {
        document.getElementById("num1").innerHTML=Num1;
	    removeClassName(document.getElementById(cardName), cardClassName);
	    addClassName(document.getElementById("num1"), "jumpDown");
		removeClassName(shape, "ringShow_" + Num1);
	    addClassName(shape, "cubeShow" + Num1);
		lock=0;
      }, 1100);
    }, 3300);
  }
  if (pro == 1) {
    checkoutNum(Num1, Num2);
    setTimeout(function() {
	  cardName = "card" + Num2;
	  cardClassName = "jump" + Num2;
	  addClassName(document.getElementById(cardName), cardClassName);
	  setTimeout(function() {
        document.getElementById("num2").innerHTML=Num2;
	    removeClassName(document.getElementById(cardName), cardClassName);
	    addClassName(document.getElementById("num2"), "jumpDown");
		removeClassName(shape, "ringShow_" + Num2);
	    addClassName(shape, "cubeShow" + Num2);
		lock=0;
      }, 1100);
    }, 3300);
  }
  if (pro == 2) {
    checkoutNum(Num2, Num3);
    setTimeout(function() {
	  cardName = "card" + Num3;
	  cardClassName = "jump" + Num3;
	  addClassName(document.getElementById(cardName), cardClassName);
	  setTimeout(function() {
        document.getElementById("num3").innerHTML=Num3;
	    removeClassName(document.getElementById(cardName), cardClassName);
	    addClassName(document.getElementById("num3"), "jumpDown");
		removeClassName(shape, "longShow_" + Num3);
	    addClassName(shape, "cubeShow" + Num3);
		for (var i=0; i<=9 ;i++) 
		  if (i != Num3) 
			removeClassName(document.getElementById("card"+i), "fall");
		addClassName(document.getElementById("num1"), "shake");
		addClassName(document.getElementById("num2"), "shake");
		addClassName(document.getElementById("num3"), "shake");
		lock=0;
      }, 1100);
    }, 9300);
	var delayTime = new Array(1000,1500,2000,2500,3000,3500,4500,6000,8000);
	var falled = new Array(0,0,0,0,0,0,0,0,0,0);
	falled[Num3] = 1;
	for (dropOrder = 9; dropOrder >= 1; dropOrder--) {
	  var k=Math.round(Math.random() * dropOrder);
	  for (dropId = 0; k > 0 || falled[dropId] != 0 ; dropId++) {
		if (falled[dropId] == 0)
		  if (--k == 0)
		    break;
	  }
	  falled[dropId]=1;
	  setTimeout("drop"+dropId+"()", delayTime[9-dropOrder]);
	}
  }
  if (pro == 3) {
	toggleShape();  
    removeClassName(document.getElementById("num1"), "jumpDown");
    removeClassName(document.getElementById("num2"), "jumpDown");
    removeClassName(document.getElementById("num3"), "jumpDown");
    removeClassName(document.getElementById("num1"), "shake");
    removeClassName(document.getElementById("num2"), "shake");
    removeClassName(document.getElementById("num3"), "shake");
    document.getElementById("num1").innerHTML=" ";
    document.getElementById("num2").innerHTML=" ";
    document.getElementById("num3").innerHTML=" ";
	origin=Num3;
	lock=0;
	pro=-1;
  }
  pro++;
}
