'use strict';
//global
function getRandomNum(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Pike Store
var pikeStore = {
  Location: '1st & Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  dailyCookieSale: 0,
  cookiesPerHour: [],
  randomCustomer: function(){
    return getRandomNum(this.minCustomer, this.maxCustomer);
  },
  createDailySale: function(){
    var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

    this.dailyCookieSale = 0;
    this.cookiesPerHour = [];

    for(var i = 0; i < hoursArray.length; i++){
      var time = hoursArray[i];
      var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
      var cookiesAtHourReport = totalCookiesAtHour + ' cookies.';
      this.cookiesPerHour.push([time, cookiesAtHourReport]);
      this.dailyCookieSale += totalCookiesAtHour;
    }
  },
};

//SeaTac Airport store
var seaTacStore = {
  Location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  dailyCookieSale: 0,
  cookiesPerHour: [],
  randomCustomer: function(){
    return getRandomNum(this.minCustomer, this.maxCustomer);
  },
  createDailySale: function(){
    var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

    this.dailyCookieSale = 0;
    this.cookiesPerHour = [];

    for(var i = 0; i < hoursArray.length; i++){
      var time = hoursArray[i];
      var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
      var cookiesAtHourReport = totalCookiesAtHour + ' cookies.';
      this.cookiesPerHour.push([time, cookiesAtHourReport]);
      this.dailyCookieSale += totalCookiesAtHour;
    }
  },
};

//Seattle Center store
var seaCenterStore = {
  Location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  dailyCookieSale: 0,
  cookiesPerHour: [],
  randomCustomer: function(){
    return getRandomNum(this.minCustomer, this.maxCustomer);
  },
  createDailySale: function(){
    var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

    this.dailyCookieSale = 0;
    this.cookiesPerHour = [];

    for(var i = 0; i < hoursArray.length; i++){
      var time = hoursArray[i];
      var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
      var cookiesAtHourReport = totalCookiesAtHour + ' cookies.';
      this.cookiesPerHour.push([time, cookiesAtHourReport]);
      this.dailyCookieSale += totalCookiesAtHour;
    }
  },
};

//Capitol Hill store
var capHillStore = {
  Location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  dailyCookieSale: 0,
  cookiesPerHour: [],
  randomCustomer: function(){
    return getRandomNum(this.minCustomer, this.maxCustomer);
  },
  createDailySale: function(){
    var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

    this.dailyCookieSale = 0;
    this.cookiesPerHour = [];

    for(var i = 0; i < hoursArray.length; i++){
      var time = hoursArray[i];
      var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
      var cookiesAtHourReport = totalCookiesAtHour + ' cookies.';
      this.cookiesPerHour.push([time, cookiesAtHourReport]);
      this.dailyCookieSale += totalCookiesAtHour;
    }
  },
};

//Alki store
var alkiStore = {
  Location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  dailyCookieSale: 0,
  cookiesPerHour: [],
  randomCustomer: function(){
    return getRandomNum(this.minCustomer, this.maxCustomer);
  },
  createDailySale: function(){
    var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

    this.dailyCookieSale = 0;
    this.cookiesPerHour = [];

    for(var i = 0; i < hoursArray.length; i++){
      var time = hoursArray[i];
      var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
      var cookiesAtHourReport = totalCookiesAtHour + ' cookies.';
      this.cookiesPerHour.push([time, cookiesAtHourReport]);
      this.dailyCookieSale += totalCookiesAtHour;
    }
  },
};

//Functions to change the TITLE in the DOM
var changeH1 = function() {
  var h1El = document.getElementById('store-name');

  h1El.textContent = "Pat's Salmon Cookies";
};

//Function to create the PIKE STORE in the DOM
var createPikeStore = function() {
  var storeContainer = document.getElementById('pike-store');
  pikeStore.createDailySale();

  //create an element
  var h2El = document.createElement('h2');
  h2El.textContent = 'Pike Store';

  //append to the containing element
  storeContainer.appendChild(h2El);

  //logic to add all the daily sales
  var ulEl = document.createElement('ul');

  for(var i = 0; i < 15; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = pikeStore.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};

//Function to create the SEATAC AIRPORT STORE in the DOM
var createSeaTacStore = function() {
  var storeContainer = document.getElementById('seatac-store');
  seaTacStore.createDailySale();

  //create an element
  var h2El = document.createElement('h2');
  h2El.textContent = 'SeaTac Airport Store';

  //append to the containing element
  storeContainer.appendChild(h2El);

  //logic to add all the daily sales
  var ulEl = document.createElement('ul');

  for(var i = 0; i < 15; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = seaTacStore.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};

//Function to create the SEATTLE CENTER STORE in the DOM
var createSeaCenterStore = function() {
  var storeContainer = document.getElementById('seacenter-store');
  seaCenterStore.createDailySale();

  //create an element
  var h2El = document.createElement('h2');
  h2El.textContent = 'Seattle Center Store';

  //append to the containing element
  storeContainer.appendChild(h2El);

  //logic to add all the daily sales
  var ulEl = document.createElement('ul');

  for(var i = 0; i < 15; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = seaCenterStore.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};

//Function to create the CAPITOL STORE in the DOM
var createCapHillStore = function() {
  var storeContainer = document.getElementById('caphill-store');
  capHillStore.createDailySale();

  //create an element
  var h2El = document.createElement('h2');
  h2El.textContent = 'Capitol Hill Store';

  //append to the containing element
  storeContainer.appendChild(h2El);

  //logic to add all the daily sales
  var ulEl = document.createElement('ul');

  for(var i = 0; i < 15; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = capHillStore.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};

//Function to create the ALKI AIRPORT STORE in the DOM
var createAlkiStore = function() {
  var storeContainer = document.getElementById('alki-store');
  alkiStore.createDailySale();

  //create an element
  var h2El = document.createElement('h2');
  h2El.textContent = 'Alki Airport Store';

  //append to the containing element
  storeContainer.appendChild(h2El);

  //logic to add all the daily sales
  var ulEl = document.createElement('ul');

  for(var i = 0; i < 15; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = alkiStore.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};

//Functions
changeH1();
createPikeStore();
createSeaTacStore();
createSeaCenterStore();
createCapHillStore();
createAlkiStore();





//What if I put all the stores in an array?

// var storesArray = [pikeStore, seaTacStore, seaCenterStore, capHillStore, alkiStore];

//   for(var i = 0; i < 5; i++) {
//     var liEl = document.createElement('li');
//     liEL.textContent = storesArray[i]
//     ulEl.appendChild(liEl);
//   }

// storeContainer.appendChild(ulEl);
// }