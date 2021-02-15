'use strict';

let workingHour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
function BranchShop(shopName, minCustomer, maxCustomer, averageCookies) {
  this.name = shopName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookies = averageCookies;
}
BranchShop.prototype.customerPerHour = function () {
  let hourlyCutomer = [];
  for (let i = 0; i < workingHour.length; i++) {
    hourlyCutomer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
  }
  return hourlyCutomer;
};
BranchShop.prototype.cookiesPerHour = function () {
  let customercount = this.customerPerHour();
  let cookiesPurchesd = [];
  let total = 0;
  for (let j = 0; j < workingHour.length; j++) {
    cookiesPurchesd.push(workingHour[j] + '  ' + Math.floor(customercount[j] * this.averageCookies) + '  Cookies');
    total += Math.floor(customercount[j] * this.averageCookies);
  }
  return [total, cookiesPurchesd];
};
BranchShop.prototype.render = function () {
  let cookiesPurch = this.cookiesPerHour();
  let divEl = document.getElementById('cookiesShop');
  let headerEl = document.createElement('h2');
  divEl.appendChild(headerEl);
  headerEl.textContent = this.name;
  let unorderListEl = document.createElement('ul');
  divEl.appendChild(unorderListEl);
  let span = document.createElement('span');
  divEl.appendChild(span);
  span.textContent = 'Total :' + cookiesPurch[0];
  for (let i = 0; i < cookiesPurch[1].length; i++) {
    let listItemEl = document.createElement('li');
    unorderListEl.appendChild(listItemEl);
    listItemEl.textContent = cookiesPurch[1][i];
  }
};

let seattle = new BranchShop('Seattle', 23, 65, 6.3);
seattle.render();
let tokyo = new BranchShop('Tokyo', 3, 24, 1.2);
tokyo.render();
let dubai = new BranchShop('Dubai', 11, 38, 3.7);
dubai.render();

let paris = new BranchShop('Paris', 20, 38, 2.3);
paris.render();

let lima = new BranchShop('Lima', 2, 16, 4.6);
lima.render();

