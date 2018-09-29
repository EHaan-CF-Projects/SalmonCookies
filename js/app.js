'use strict';


var changeH1 = function() {
  var h1El = document.getElementById('store-name');

  h1El.textContent = "Pat's Salmon Cookies";
};

changeH1(); //<----------------------------------------------------------------------------

//Cookie Store Constructor Function
var SalmonCookiesStore = function(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesSoldPerCustomer){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesSold = avgCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
  this.openHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.totalDailyCookiesSale = 0;
  this.calculateCookiesSoldEachHour();
  this.calculateDailyCookieSale();
};

//Function to generate random customers and calculate cookies sold per hour
SalmonCookiesStore.prototype.generateCustomersPerHour = function() {
  var randomAmtCustomers = Math.floor((Math.random() * (this.max - this.min)) + this.min);
  return Math.round(randomAmtCustomers * this.avgCookiesSold);
};

//Function to store hourly cookies in an array
SalmonCookiesStore.prototype.calculateCookiesSoldEachHour = function() {
  for(var i = 0; i < 15; i++) {
    this.cookiesSoldEachHour.push(this.generateCustomersPerHour());
  }
};

//Function to calculate total cookies sold daily
SalmonCookiesStore.prototype.calculateDailyCookieSale = function() {
  for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    this.totalDailyCookiesSale += this.cookiesSoldEachHour[i];
  }
};

//Function to render all stores in the DOM
SalmonCookiesStore.prototype.renderStoreDetails = function() {
  if(!this.cookiesSoldEachHour.length){
    this.calculateCookiesSoldEachHour();
  }

  var storeDataTableEl = function() {
    document.getElementById('store-details');
  var thEl = document.createEl
  // var salmonCookiesStoreContainer = document.getElementById('stores');
  // var headerEl = document.createElement('h2');
  // headerEl.textContent = this.name;
  // salmonCookiesStoreContainer.appendChild(headerEl);
};

//Function to generate new unique stores
var pikePlace = new SalmonCookiesStore('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new SalmonCookiesStore('SeaTac', 3, 24, 1.2);
var seattleCenter = new SalmonCookiesStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new SalmonCookiesStore('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new SalmonCookiesStore('Alki', 2, 16, 4.6);

var renderAllSalmonCookieStores = function(){
  pikePlace.renderStoreDetails();
  seaTacAirport.renderStoreDetails();
  seattleCenter.renderStoreDetails();
  capitolHill.renderStoreDetails();
  alkiBeach.renderStoreDetails();
};

renderAllSalmonCookieStores();



//===================================================================================================
// //Generic Store Object
// var SalmonCookieStore = function(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesSoldPerCustomer){
//   this.storeName = storeName;
//   this.minCustomers = minCustomersPerHour;
//   this.maxCustomers = maxCustomersPerHour;
//   this.avgCookiesPerSale = avgCookiesSoldPerCustomer;
//   this.cookiesSoldEachHour = [];
//   // this.totalDailyCookies = totalCookiesSoldPerDay;
// };

// //Generates a random number of customers to calculate average cookies sold in that hour
// SalmonCookieStore.prototype.generateRandomHourlyCustomers = function() {
//   var randomHourlyCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   return Math.round(randomHourlyCustomers * this.avgCookiesperSale);
// };

// //Calculates the number of cookies sold and stores them as an array in cookiesSoldEachHour
// SalmonCookieStore.prototype.calculateCookiesSoldEachHour = function (){
//   for(var i = 0; i < 15; i++) {
//     this.cookiesSoldEachHour.push(this.generateRandomHourlyCustomers());
//   }
// };

// var pikeStore = new SalmonCookieStore('1st & Pike', 23, 65, 6.3);
// console.log(pikeStore);


// //global
// function getRandomNum(min, max){
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// //Pike Store
// var pikeStore = {
//   Location: '1st & Pike',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookies: 6.3,
//   dailyCookieSale: 0,
//   cookiesPerHour: [],
//   randomCustomer: function(){
//     return getRandomNum(this.minCustomer, this.maxCustomer);
// 	},
//   createDailySale: function(){
//     var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

//     this.dailyCookieSale = 0;
//     this.cookiesPerHour = [];

//     for(var i = 0; i < hoursArray.length; i++){
//       var time = hoursArray[i];
//       var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
//       var cookiesAtHourReport = Math.round(totalCookiesAtHour) + ' cookies.';
//       this.cookiesPerHour.push([time, cookiesAtHourReport]);
//       this.dailyCookieSale += totalCookiesAtHour;
//     }
// 	},
// };

// //SeaTac Airport store
// var seaTacStore = {
//   Location: 'SeaTac Airport',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookies: 1.2,
//   dailyCookieSale: 0,
//   cookiesPerHour: [],
//   randomCustomer: function(){
//     return getRandomNum(this.minCustomer, this.maxCustomer);
//   },
//   createDailySale: function(){
//     var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

//     this.dailyCookieSale = 0;
//     this.cookiesPerHour = [];

//     for(var i = 0; i < hoursArray.length; i++){
//       var time = hoursArray[i];
//       var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
//       var cookiesAtHourReport = Math.round(totalCookiesAtHour) + ' cookies.';
//       this.cookiesPerHour.push([time, cookiesAtHourReport]);
//       this.dailyCookieSale += totalCookiesAtHour;
//     }
//   },
// };

// //Seattle Center store
// var seaCenterStore = {
//   Location: 'Seattle Center',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookies: 3.7,
//   dailyCookieSale: 0,
//   cookiesPerHour: [],
//   randomCustomer: function(){
//     return getRandomNum(this.minCustomer, this.maxCustomer);
//   },
//   createDailySale: function(){
//     var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

//     this.dailyCookieSale = 0;
//     this.cookiesPerHour = [];

//     for(var i = 0; i < hoursArray.length; i++){
//       var time = hoursArray[i];
//       var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
//       var cookiesAtHourReport = Math.round(totalCookiesAtHour) + ' cookies.';
//       this.cookiesPerHour.push([time, cookiesAtHourReport]);
//       this.dailyCookieSale += totalCookiesAtHour;
//     }
//   },
// };

// //Capitol Hill store
// var capHillStore = {
//   Location: 'Capitol Hill',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookies: 2.3,
//   dailyCookieSale: 0,
//   cookiesPerHour: [],
//   randomCustomer: function(){
//     return getRandomNum(this.minCustomer, this.maxCustomer);
//   },
//   createDailySale: function(){
//     var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

//     this.dailyCookieSale = 0;
//     this.cookiesPerHour = [];

//     for(var i = 0; i < hoursArray.length; i++){
//       var time = hoursArray[i];
//       var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
//       var cookiesAtHourReport =Math.round(totalCookiesAtHour) + ' cookies.';
//       this.cookiesPerHour.push([time, cookiesAtHourReport]);
//       this.dailyCookieSale += totalCookiesAtHour;
//     }
//   },
// };

// //Alki store
// var alkiStore = {
//   Location: 'Alki',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookies: 4.6,
//   dailyCookieSale: 0,
//   cookiesPerHour: [],
//   randomCustomer: function(){
//     return getRandomNum(this.minCustomer, this.maxCustomer);
//   },
//   createDailySale: function(){
//     var hoursArray = ['6am', '7am','8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm','8pm'];

//     this.dailyCookieSale = 0;
//     this.cookiesPerHour = [];

//     for(var i = 0; i < hoursArray.length; i++){
//       var time = hoursArray[i];
//       var totalCookiesAtHour = (this.randomCustomer() * this.avgCookies);
//       var cookiesAtHourReport = Math.round(totalCookiesAtHour) + ' cookies.';
//       this.cookiesPerHour.push([time, cookiesAtHourReport]);
//       this.dailyCookieSale += totalCookiesAtHour;
//     }
//   },
// };

// //Functions to change the TITLE in the DOM


// //Function to create the PIKE STORE in the DOM
// var createPikeStore = function() {
//   var storeContainer = document.getElementById('pike-store');
// 	pikeStore.createDailySale();

//   //create an element
//   var h2El = document.createElement('h2');
//   h2El.textContent = 'Pike Store';

//   //append to the containing element
//   storeContainer.appendChild(h2El);

//   //logic to add all the daily sales
//   var ulEl = document.createElement('ul');

//   for(var i = 0; i < 15; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = pikeStore.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//   }

//   storeContainer.appendChild(ulEl);
// };

// //Function to create the SEATAC AIRPORT STORE in the DOM
// var createSeaTacStore = function() {
//   var storeContainer = document.getElementById('seatac-store');
//   seaTacStore.createDailySale();

//   //create an element
//   var h2El = document.createElement('h2');
//   h2El.textContent = 'SeaTac Airport Store';

//   //append to the containing element
//   storeContainer.appendChild(h2El);

//   //logic to add all the daily sales
//   var ulEl = document.createElement('ul');

//   for(var i = 0; i < 15; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = seaTacStore.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//   }

//   storeContainer.appendChild(ulEl);
// };

// //Function to create the SEATTLE CENTER STORE in the DOM
// var createSeaCenterStore = function() {
//   var storeContainer = document.getElementById('seacenter-store');
//   seaCenterStore.createDailySale();

//   //create an element
//   var h2El = document.createElement('h2');
//   h2El.textContent = 'Seattle Center Store';

//   //append to the containing element
//   storeContainer.appendChild(h2El);

//   //logic to add all the daily sales
//   var ulEl = document.createElement('ul');

//   for(var i = 0; i < 15; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = seaCenterStore.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//   }

//   storeContainer.appendChild(ulEl);
// };

// //Function to create the CAPITOL STORE in the DOM
// var createCapHillStore = function() {
//   var storeContainer = document.getElementById('caphill-store');
//   capHillStore.createDailySale();

//   //create an element
//   var h2El = document.createElement('h2');
//   h2El.textContent = 'Capitol Hill Store';

//   //append to the containing element
//   storeContainer.appendChild(h2El);

//   //logic to add all the daily sales
//   var ulEl = document.createElement('ul');

//   for(var i = 0; i < 15; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = capHillStore.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//   }

//   storeContainer.appendChild(ulEl);
// };

// //Function to create the ALKI AIRPORT STORE in the DOM
// var createAlkiStore = function() {
//   var storeContainer = document.getElementById('alki-store');
//   alkiStore.createDailySale();

//   //create an element
//   var h2El = document.createElement('h2');
//   h2El.textContent = 'Alki Airport Store';

//   //append to the containing element
//   storeContainer.appendChild(h2El);

//   //logic to add all the daily sales
//   var ulEl = document.createElement('ul');

//   for(var i = 0; i < 15; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = alkiStore.cookiesPerHour[i];
//     ulEl.appendChild(liEl);
//   }

//   storeContainer.appendChild(ulEl);
// };

// //Functions
// changeH1();
// createPikeStore();
// createSeaTacStore();
// createSeaCenterStore();
// createCapHillStore();
// createAlkiStore();


// //What if I put all the stores in an array?

// // var storesArray = [pikeStore, seaTacStore, seaCenterStore, capHillStore, alkiStore];

// //   for(var i = 0; i < 5; i++) {
// //     var liEl = document.createElement('li');
// //     liEL.textContent = storesArray[i]
// //     ulEl.appendChild(liEl);
// //   }

// // storeContainer.appendChild(ulEl);
// // }