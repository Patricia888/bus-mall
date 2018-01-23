'use strict';

//array to store all Busmall image instances
Images.allBusMallImages = [];
Images.totalNumberOfClicks = 0;

Images.lastDisplayed = [];

//access the section element from DOM
var sectionEl = document.getElementById('product-section');
//access the ul element from DOM
var ulEl = document.getElementById('results');

//array to store names for our chart labels
var imageNames = [];

//array to store votes per product
var productVotes = [];


//make a constructor function for Images objects
function Images(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Images.allBusMallImages.push(this);
}
console.log(Images.allBusMallImages);

//create instances of Busmall Pics
new Images('img/bag.jpg', 'R2D2 bag');
new Images('img/banana.jpg', 'banana cutter');
new Images('img/bathroom.jpg', 'bathroom ipad stand');
new Images('img/boots.jpg', 'rainboots with holes');
new Images('img/breakfast.jpg', 'tiny breaky cooker');
new Images('img/bubblegum.jpg', 'horrible gum');
new Images('img/chair.jpg', 'rounded chair');
new Images('img/cthulhu.jpg', 'cthulhu monster figure');
new Images('img/dog-duck.jpg', 'duck bill for dogs');
new Images('img/dragon.jpg', 'dragon meat');
new Images('img/pen.jpg', 'silverware pens');
new Images('img/pet-sweep.jpg', 'pet foot brooms');
new Images('img/scissors.jpg', 'pizza scissors');
new Images('img/shark.jpg', 'terrible shark sleeping bag');
new Images('img/sweep.png', 'babby sweep outfit');
new Images('img/tauntaun.jpg', 'tauntaun sleeping bag');
new Images('img/unicorn.jpg', 'unicorn meat');
new Images('img/usb.gif', 'tentacle usb');
new Images('img/water-can.jpg', 'looped water can');
new Images('img/wine-glass.jpg', 'wine glass');


//access the image from the DOM
//imgEl is image element
var imgEl = document.getElementById('busmallpic1');
var imgEl2 = document.getElementById('busmallpic2');
var imgEl3 = document.getElementById('busmallpic3');


//event listener on the image
imgEl.addEventListener('click', allRandomImages);
imgEl2.addEventListener('click', allRandomImages);
imgEl3.addEventListener('click', allRandomImages);


//callback function for the event listener (to randomly display a goat image)
function allRandomImages() {
  function randomImage() {
  //random number generator to return a number between 0 and the length of the array (Goat.allGoats)
    var randomIndex = Math.floor(Math.random() * Images.allBusMallImages.length);
    //use the random number to display a goat at that random index
    imgEl.src = Images.allBusMallImages[randomIndex].filepath;
    numberOfClicks1++;
    console.log('1st pic clicks: ' + numberOfClicks1);
  }
  function randomImage2() {
    var randomIndex = Math.floor(Math.random() * Images.allBusMallImages.length);

    imgEl2.src = Images.allBusMallImages[randomIndex].filepath;
    numberOfClicks2++;
    console.log('2nd pic clicks: ' + numberOfClicks2);
  }
  function randomImage3() {
    var randomIndex = Math.floor(Math.random() * Images.allBusMallImages.length);

    imgEl3.src = Images.allBusMallImages[randomIndex].filepath;
    numberOfClicks3++;
    console.log('3rd pic clicks: ' + numberOfClicks2);
  }
  randomImage();
  randomImage2();
  randomImage3();

  totalNumberOfClicks = numberOfClicks1 + numberOfClicks2 + numberOfClicks3;

  console.log(totalNumberOfClicks);

  if (totalNumberOfClicks > 25) {
    alert('Thank you for your participation! Here are your results.');
  }
}

//invoke the callback


allRandomImages();
