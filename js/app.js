'use strict';

let workingHour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let tableEl = document.createElement('table');
let totalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
  let count = [];
  let total = 0;
  for (let j = 0; j < workingHour.length; j++) {
    cookiesPurchesd.push(workingHour[j] + '  ' + Math.floor(customercount[j] * this.averageCookies) + '  Cookies');
    total += Math.floor(customercount[j] * this.averageCookies);
    count.push(Math.floor(customercount[j] * this.averageCookies));
    totalArray[j] = totalArray[j] + Math.floor(customercount[j] * this.averageCookies);
  }
  return [total, cookiesPurchesd, count];
};

BranchShop.prototype.render = function () {
  let cookiesPurch = this.cookiesPerHour();
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (let i = 0; i <= cookiesPurch[1].length; i++) {
    tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = cookiesPurch[2][i];
  }
  tableData.textContent = cookiesPurch[0];
};
let tableHeader = function () {
  let divEl = document.getElementById('cookiesShop');
  // tableEl.className = 'table';
  divEl.append(tableEl);
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let tableHead = document.createElement('th');
  tableRow.appendChild(tableHead);
  for (let i = 0; i <= workingHour.length; i++) {
    tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = workingHour[i];
  }
  tableHead.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHead);

};
let tableFooter = function () {
  let divEl = document.getElementById('cookiesShop');
  tableEl.className = 'table';
  divEl.append(tableEl);
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let tableHead = document.createElement('th');
  tableRow.appendChild(tableHead);
  tableHead.textContent = 'Totals';
  let dailyLocationTotal = 0;
  for (let i = 0; i <= totalArray.length; i++) {
    tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = totalArray[i];
    if (i < totalArray.length) {
      dailyLocationTotal += totalArray[i];

    }
  }
  tableHead.textContent = dailyLocationTotal;
  tableRow.appendChild(tableHead);

};



tableHeader();

let seattle = new BranchShop('Seattle', 23, 65, 6.3);
seattle.render();
//  seattle.tableHeader();
let tokyo = new BranchShop('Tokyo', 3, 24, 1.2);
tokyo.render();
let dubai = new BranchShop('Dubai', 11, 38, 3.7);
dubai.render();

let paris = new BranchShop('Paris', 20, 38, 2.3);
paris.render();

let lima = new BranchShop('Lima', 2, 16, 4.6);
lima.render();
tableFooter();
