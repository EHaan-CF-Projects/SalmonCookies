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
    var hoursArray = ["6am", "7am","8am", "9am","10am", "11am","12pm", "1pm","2pm", "3pm","4pm", "5pm","6pm", "7pm","8pm"];

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
    var hoursArray = ["6am", "7am","8am", "9am","10am", "11am","12pm", "1pm","2pm", "3pm","4pm", "5pm","6pm", "7pm","8pm"];

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
    var hoursArray = ["6am", "7am","8am", "9am","10am", "11am","12pm", "1pm","2pm", "3pm","4pm", "5pm","6pm", "7pm","8pm"];

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
    var hoursArray = ["6am", "7am","8am", "9am","10am", "11am","12pm", "1pm","2pm", "3pm","4pm", "5pm","6pm", "7pm","8pm"];

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
    var hoursArray = ["6am", "7am","8am", "9am","10am", "11am","12pm", "1pm","2pm", "3pm","4pm", "5pm","6pm", "7pm","8pm"];

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
