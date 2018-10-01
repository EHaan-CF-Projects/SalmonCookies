'use strict';

//Cookie Store Constructor Function
var openHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var SalmonCookiesStore = function(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesSoldPerCustomer){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesSold = avgCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
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

//DOM Manipulation
//Change Page Header
var changeH1 = function() {
  var h1El = document.getElementById('store-name');

  h1El.textContent = "Pat's Salmon Cookies";
};

//Store Data Table
//Table Header with hourly & daily totals columns
var salesTableEl = document.getElementById('store-data');
var theadEl = document.createElement('thead');

//Empty first cell
var tdEl = document.createElement('td');
tdEl.textContent = ' ';
theadEl.appendChild(tdEl);

//Hours
for(var i = 0; i < openHoursArray.length; i++) {
  var thEl = document.createElement('th');
  thEl.textContent = openHoursArray[i];
  theadEl.appendChild(thEl);
}

//Daily Totals
var thEl = document.createElement('th');
thEl.textContent = 'Daily Totals';
theadEl.appendChild(thEl);

salesTableEl.appendChild(theadEl);

//Create table body
var tbody = document.createElement('tbody');
salesTableEl.appendChild(tbody);

//Add rows of store details
SalmonCookiesStore.prototype.renderSalesDataAsTable = function() {
  this.cookiesSoldEachHour;
  this.totalDailyCookiesSale;

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookiesSale;
  trEl.appendChild(tdEl);

  tbody.appendChild(trEl);
};

//Table footer
var tfoot = document.createElement('tfoot');
salesTableEl.appendChild(tfoot);

var trEl = document.createElement('tr');
tfoot.appendChild(trEl);

//Hourly Totals Row Header
var thEl = document.createElement('th');
thEl.textContent = 'Hourly Totals';
trEl.appendChild(thEl);

//Totals of each hour column
var allStoreHourlyTotals = function() {
  for(var i = 0; i < openHoursArray.length; i++) {
    var hourlyTotal = 0;

    for(var j = 0; j < storesArray.length; j++) {
      hourlyTotal += storesArray[j].cookiesSoldEachHour[i];
    }

    var tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
  }
};

//All Sales Totals
var totals = function() {
  var allTotals = 0;
  for(var i = 0; i < storesArray.length; i++) {
    allTotals += storesArray[i].totalDailyCookiesSale;
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = allTotals;
  trEl.appendChild(tdEl);
};

salesTableEl.appendChild(tfoot);

//Function to generate new unique stores
var pikePlace = new SalmonCookiesStore('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new SalmonCookiesStore('SeaTac', 3, 24, 1.2);
var seattleCenter = new SalmonCookiesStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new SalmonCookiesStore('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new SalmonCookiesStore('Alki', 2, 16, 4.6);

//Function calls to Render information in the DOM
var storesArray = [pikePlace, seaTacAirport, seattleCenter, capitolHill, alkiBeach];

var renderAllStoreData = function(){
  pikePlace.renderSalesDataAsTable();
  seaTacAirport.renderSalesDataAsTable();
  seattleCenter.renderSalesDataAsTable();
  capitolHill.renderSalesDataAsTable();
  alkiBeach.renderSalesDataAsTable();
};

changeH1();
renderAllStoreData();
allStoreHourlyTotals();
totals();
