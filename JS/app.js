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
var sweep = new BusMal('sweep', "assets/sweep.png");
var scissors = new BusMal('scissors', "assets/scissors.jpg");
var shark = new BusMal('shark', "assets/shark.jpg");
var petSweep = new BusMal('pet', "assets/pet-sweep.jpg");
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

function randomSelector1() {
    return Math.floor(Math.random() * allElements.length);
}
// function randomSelector2() {
//     return Math.floor(Math.random() * ((allElements.length+1)*2));
// }
// console.log(randomSelector2());
// randomSelector();
/////////////////////////////
var render = document.getElementById('vote');
var firstImg;
var socondtImg;
var thirdImg;
var attempts = 0;
var timeUserSelect = [];
var chartLable = [];
var rounds;
var previous = [];
var randomNumb;
///// rendering function//////
///////////////////////////////////////////////////////////////////////
function rendering1() {

    if (attempts < rounds) {
        randomNumb = randomSelector1();
        while(randomNumb === 18 || randomNumb === 19) { var randomNumb = 17 }
      while (randomNumb === previous[attempts - 1] || randomNumb === (previous[attempts - 1] + 1) || randomNumb === (previous[attempts - 1] + 2)|| randomNumb === (previous[attempts - 1] - 1) || randomNumb === (previous[attempts - 1] - 2)) { randomNumb+=3}
      if(randomNumb===20||randomNumb==19||randomNumb===18){randomNumb=0;}
      previous[attempts] = randomNumb;
    console.log(randomNumb);
        firstImg = document.createElement('img');
        firstImg.src = allElements[randomNumb].path;
        render.appendChild(firstImg);
        allElements[randomNumb].timeShowed++;
        firstImg.addEventListener('click', choose);
        function choose(event) {
            event.preventDefault();
            allElements[randomNumb].timeSelected++;
            render.removeChild(firstImg);
            render.removeChild(socondtImg);
            render.removeChild(thirdImg);
            attempts++;
            rendering1();

        }


        //////////////////////////////////////////////////////

        socondtImg = document.createElement('img');
        socondtImg.src = allElements[randomNumb + 1].path;
        render.appendChild(socondtImg);
        allElements[randomNumb + 1].timeShowed++;
        socondtImg.addEventListener('click', choose1);
        function choose1(event) {
            event.preventDefault();
            allElements[randomNumb + 1].timeSelected++;
            render.removeChild(socondtImg);
            render.removeChild(firstImg);
            render.removeChild(thirdImg);
            attempts++;
            rendering1();


        }

        ///////////////////////////////////////////////////////////

        thirdImg = document.createElement('img');
        thirdImg.src = allElements[randomNumb + 2].path;
        render.appendChild(thirdImg);
        allElements[randomNumb + 2].timeShowed++;
        thirdImg.addEventListener('click', choose2);
        function choose2(event) {
            event.preventDefault();
            allElements[randomNumb + 2].timeSelected++;
            render.removeChild(thirdImg);
            render.removeChild(socondtImg);
            render.removeChild(firstImg);
            attempts++;
            rendering1();
        }
    }
    /////////////////////////////////////////////////////////
    else {

        for (var i = 0; i < allElements.length; i++) {
            timeUserSelect[i] = allElements[i].timeSelected;
        }



        var button = document.createElement('button');
        render.appendChild(button);
        button.id = "bb";
        button.textContent = "result";

        button.addEventListener('click', showlist)
        function showlist(event) {
            event.preventDefault();
            for (var i = 0; i < allElements.length; i++) {
                var list = document.createElement('li');
                render.appendChild(list),
                    list.textContent = allElements[i].name + ':' + ' showed: ' + allElements[i].timeShowed + ', selected: ' + allElements[i].timeSelected;
            }
            var ctx = document.getElementById('chart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartLable,
                    datasets: [{
                        label: '# of Votes',
                        data: timeUserSelect,

                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(153, 0, 76, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 128, 0, 1)',
                            'rgb(11, 151, 155)',
                            'rgb(226, 83, 177)',
                            'rgb(0, 83, 177))',
                            'rgb(0, 252, 177)',
                            'rgb(188, 119, 99)',
                            'rgb(238, 247, 99)',
                            'rgb(238, 247, 99)',
                            'rgb(103, 247, 247)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgb(103, 247, 29)',
                            'rgba(255, 159, 64, 1)'],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(153, 0, 76, 1)',
                            'rgba(255, 51, 153, 1)',
                            'rgba(255, 128, 0, 1)',
                            'rgb(11, 151, 155)',
                            'rgb(226, 83, 177)',
                            'rgb(0, 83, 177))',
                            'rgb(0, 252, 177)',
                            'rgb(188, 119, 99)',
                            'rgb(238, 247, 99)',
                            'rgb(238, 247, 99)',
                            'rgb(103, 247, 247)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgb(103, 247, 29)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                    
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            button.removeEventListener('click', showlist);
        }
    }
}
///////////////////////////////////////////////////////////////////////////////


var shotimes=[];
for (var i = 0; i < allElements.length; i++) {
    chartLable[i] = allElements[i].name;
    shotimes[i] = allElements[i].timeShowed;
}
////////////////////////////////////////////////
var form = document.createElement('form');
render.appendChild(form);
var lable = document.createElement('label');
form.appendChild(lable);
lable.textContent = 'how many rounds you want to take?';
var input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('name', 's');
input.setAttribute('value', '');
form.appendChild(input);
var sub = document.createElement("input");
sub.setAttribute('type', "submit");
sub.setAttribute('value', "Submit");
form.appendChild(sub);
form.addEventListener('submit', takeNumber);
function takeNumber(event) {
    event.preventDefault();
    var userInput = event.target.s.value;
    console.log(userInput);
    if (userInput === 0 || userInput === '') { rounds = 25; }
    else { rounds = userInput; }
    render.removeChild(form);
    rendering1();
}
//////////////////////////////////////////////////////////////////




