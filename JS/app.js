'use strict';
//// Constructor/////
function BusMal(itemName, itemPath) {
    this.name = itemName;
    this.path = itemPath;
    this.timeShowed = 0;
    this.timeSelected = 0;
}
//// Creating objects////
var bag = new BusMal('bag', "assets/bag.jpg");
var banana = new BusMal('banana', "assets/banana.jpg");
var bathroom = new BusMal('bathroom', "assets/bathroom.jpg");
var boots = new BusMal('boots', "assets/boots.jpg");
var breakfast = new BusMal('breakfast', "assets/breakfast.jpg");
var chair = new BusMal('chair', "assets/chair.jpg");
var bubblegum = new BusMal('bablegum', "assets/bubblegum.jpg");
var cthulhu = new BusMal('cthlulhu', "assets/cthulhu.jpg");
var duck = new BusMal('duck', "assets/dog-duck.jpg");
var dragon = new BusMal('dragon', "assets/dragon.jpg");
var pen = new BusMal('pen', "assets/pen.jpg");
var sweep = new BusMal('sweep', "assets/pet-sweep.jpg");
var scissors = new BusMal('scissors', "assets/scissors.jpg");
var shark = new BusMal('shark', "assets/shark.jpg");
var petSweep = new BusMal('pet', "assets/pen.jpg");
var tauntaun = new BusMal('tauntaun', "assets/tauntaun.jpg");
var unicorn = new BusMal('unicorn', "assets/unicorn.jpg");
var usb = new BusMal('usb', "assets/usb.gif");
var water = new BusMal('water', "assets/water-can.jpg");
var glass = new BusMal('glass', "assets/wine-glass.jpg");
////// Array for all objects///////
var allElements = [bag, banana, bathroom, boots, breakfast, chair, bubblegum, cthulhu, duck, dragon, pen, sweep, scissors, shark, petSweep, tauntaun, unicorn, usb, water, glass];
// for( var i =0; i<allElements.length;i++){console.log(allElements[i]);}
//console.log(boots.path);
//var source;
//////////////

function randomSelector() {
    return Math.floor(Math.random() * allElements.length);
}


// randomSelector();
/////////////////////////////
var render = document.getElementById('vote');
var firstImg;
var socondtImg;
var thirdImg;

///// rendering function//////
function rendering1() {
  var ni= randomSelector();
  if(ni===18 || ni===19){var ni =17}
    firstImg = document.createElement('img');
    firstImg.src = allElements[ni].path;
    render.appendChild(firstImg);
    allElements[ni].timeShowed++;

    socondtImg = document.createElement('img');
    socondtImg.src = allElements[ni+1].path;
    render.appendChild(socondtImg);
    allElements[ni+1].timeShowed++;

    thirdImg = document.createElement('img');
    thirdImg.src = allElements[ni+2].path;
    render.appendChild(thirdImg);
    allElements[ni+2].timeShowed++;
}
    
/////////////////
rendering1();
/////////////



var user = render.addEventListener('click', choose);


function choose(event) {

    event.preventDefault();
  
    alert(event.target.name.value);

}















// }

// console.log(bag.timeShowed);
// console.log(banana.timeShowed);
// console.log(boots.timeShowed);
// console.log(bathroom.timeShowed);
// console.log(breakfast.timeShowed);
// console.log(chair.timeShowed);
// console.log(glass.timeShowed);
// console.log(water.timeShowed);
// console.log(unicorn.timeShowed);
// console.log(usb.timeShowed);
// console.log(tauntaun.timeShowed);
// console.log(petSweep.timeShowed);
// console.log(shark.timeShowed);
// console.log(sweep.timeShowed);
// console.log(scissors.timeShowed);
// console.log(pen.timeShowed);
// console.log(duck.timeShowed);
// console.log(dragon.timeShowed);
// console.log(cthulhu.timeShowed);
// console.log(bubblegum.timeShowed);
