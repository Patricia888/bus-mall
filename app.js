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
function Images(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Images.allBusMallImages.push(this);
  imageNames.push(this.name);
}
console.log(Images.allBusMallImages);

//create instances of Busmall Pics
new Images('R2D2 bag', 'img/bag.jpg');
new Images('banana cutter', 'img/banana.jpg');
new Images('bathroom ipad stand', 'img/bathroom.jpg');
new Images('rainboots with holes', 'img/boots.jpg');
new Images('tiny breaky cooker', 'img/breakfast.jpg');
new Images('horrible gum', 'img/bubblegum.jpg');
new Images('rounded chair', 'img/chair.jpg');
new Images('cthulhu monster figure', 'img/cthulhu.jpg');
new Images('duck bill for dogs', 'img/dog-duck.jpg');
new Images('dragon meat', 'img/dragon.jpg');
new Images('silverware pens', 'img/pen.jpg');
new Images('pet foot brooms', 'img/pet-sweep.jpg');
new Images('pizza scissors', 'img/scissors.jpg');
new Images('terrible shark sleeping bag', 'img/shark.jpg');
new Images('babby sweep outfit', 'img/sweep.png');
new Images('tauntaun sleeping bag', 'img/tauntaun.jpg');
new Images('unicorn meat', 'img/unicorn.jpg');
new Images('tentacle usb', 'img/usb.gif');
new Images('looped water can', 'img/water-can.jpg');
new Images('wine glass', 'img/wine-glass.jpg');


//access the image from the DOM
//imgEl is image element
var imgEl1 = document.getElementById('busmallpic1');
var imgEl2 = document.getElementById('busmallpic2');
var imgEl3 = document.getElementById('busmallpic3');


//randomly display one of the pictures
function allRandomImages() {
  var randomImage1 = Math.floor(Math.random() * Images.allBusMallImages.length);
  var randomImage2 = Math.floor(Math.random() * Images.allBusMallImages.length);
  var randomImage3 = Math.floor(Math.random() * Images.allBusMallImages.length);

  //check to make sure each random number is unique
  //if same, generate new random numbers
  //condition 1: 1 and 2 are the same                 check
  //condition 2: 1 and 3 are the same                 check
  //condition 3: 2 and 3 are the same                 check
  //condition 4: 1 is in the lastDisplayed array      check
  //condition 5: 2 is in the lastDisplayed array      check
  //condition 6: 3 is in the lastDisplayed array
  while (randomImage1 === randomImage2 || randomImage1 === randomImage3 || randomImage2 === randomImage3 || Images.lastDisplayed.includes(randomImage1) || Images.lastDisplayed.includes(randomImage2) || Images.lastDisplayed.includes(randomImage3)) {
    console.log('Duplicate was caught');

    randomImage1 = Math.floor(Math.random() * Images.allBusMallImages.length);
    randomImage2 = Math.floor(Math.random() * Images.allBusMallImages.length);
    randomImage3 = Math.floor(Math.random() * Images.allBusMallImages.length);
  }
  //set the src and alt attributes
  imgEl1.src = Images.allBusMallImages[randomImage1].filepath;
  imgEl1.alt = Images.allBusMallImages[randomImage1].name;
  imgEl2.src = Images.allBusMallImages[randomImage2].filepath;
  imgEl2.alt = Images.allBusMallImages[randomImage2].name;
  imgEl3.src = Images.allBusMallImages[randomImage3].filepath;
  imgEl3.alt = Images.allBusMallImages[randomImage3].name;

  //increment the number of times EACH image was shown
  Images.allBusMallImages[randomImage1].timesDisplayed += 1;
  Images.allBusMallImages[randomImage2].timesDisplayed += 1;
  Images.allBusMallImages[randomImage3].timesDisplayed += 1;

  //keep track of previously displayed
  Images.lastDisplayed[0] = randomImage1;
  Images.lastDisplayed[1] = randomImage2;
  Images.lastDisplayed[2] = randomImage3;
}

//define handleClick function
function handleClick(event) {
  //track total number of clicks
  Images.totalNumberOfClicks += 1;
  console.log(Images.totalNumberOfClicks);
  console.log(event.target.alt);
  //count clicks on a specific image
  for (var i in Images.allBusMallImages) {
    if (event.target.alt === Images.allBusMallImages[i].name) {
      Images.allBusMallImages[i].votes += 1;
    }
  }
  if (Images.totalNumberOfClicks > 24) {
    sectionEl.removeEventListener('click', handleClick);
    alert('Thank you for your participation in our research focus group. Here are your results.');
    //showResults();
    updateVotes();
    //renderChart();
  } else {
    allRandomImages();
  }
}

// function showResults() {
//   for (var i in Images.allBusMallImages) {
//     var liEl = document.createElement('li)');
//     liEl.textContent = Images.allBusMallImages[i].name + ' has ' + Images.allBusMallImages[i].votes + ' votes and was displayed ' + Images.allBusMallImages[i].timesDisplayed + ' times.';
//     ulEl.appendChild(liEl);
//   }
// }

//function to update the number of votes per product
function updateVotes() {
  for(var i in Images.allBusMallImages) {
    productVotes[i] = Images.allBusMallImages[i].votes;
  }
}

//chart function

sectionEl.addEventListener('click', handleClick);


allRandomImages();
