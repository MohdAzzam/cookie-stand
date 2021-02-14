'use strict';


let workingHour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

let Seattle = {
  'shopName': 'Seattle',
  'minCustomer': 23,
  'maxCustomer': 65,
  'averageCookies': 6.3,
  'hourlyCutomer': [],
  'customerPerHour': function () {
    for (let i = 0; i < workingHour.length; i++) {
      this.hourlyCutomer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    }
  },
  'cookiesPurchesd': [],
  'cookiesPerHour': function () {
    let total = 0;
    for (let j = 0; j < workingHour.length; j++) {
      this.cookiesPurchesd.push(workingHour[j] + '  ' + Math.floor(this.hourlyCutomer[j] * this.averageCookies) + '  Cookies');
      total += Math.floor(this.hourlyCutomer[j] * this.averageCookies);
    }
    return total;
  },
  'render': function () {
    let divEl = document.getElementById('cookiesShop');
    let headerEl = document.createElement('h2');
    divEl.appendChild(headerEl);
    headerEl.textContent = this.shopName;
    let unorderListEl = document.createElement('ul');
    divEl.appendChild(unorderListEl);
    let span = document.createElement('span');
    divEl.appendChild(span);
    span.textContent = 'Total :' + this.cookiesPerHour();
    for (let i = 0; i < this.cookiesPurchesd.length; i++) {
      let listItemEl = document.createElement('li');
      unorderListEl.appendChild(listItemEl);
      listItemEl.textContent = this.cookiesPurchesd[i];
    }

  }

};

Seattle.customerPerHour();
Seattle.render();

let Tokyo = {
  'shopName': 'Tokyo',
  'minCustomer': 3,
  'maxCustomer': 24,
  'averageCookies': 1.2,
  'hourlyCutomer': [],
  'customerPerHour': function () {
    for (let i = 0; i < workingHour.length; i++) {
      this.hourlyCutomer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    }
  },
  'cookiesPurchesd': [],
  'cookiesPerHour': function () {
    let total = 0;
    for (let j = 0; j < workingHour.length; j++) {
      this.cookiesPurchesd.push(workingHour[j] + Math.floor(this.hourlyCutomer[j] * this.averageCookies) + ' Cookies');
      total += Math.floor(this.hourlyCutomer[j] * this.averageCookies);
    }
    return total;
  },
  'render': function () {
    let divEl = document.getElementById('cookiesShop');
    let headerEl = document.createElement('h2');
    divEl.appendChild(headerEl);
    headerEl.textContent = this.shopName;
    let unorderListEl = document.createElement('ul');
    divEl.appendChild(unorderListEl);
    let span = document.createElement('span');
    divEl.appendChild(span);
    span.textContent = 'Total :' + this.cookiesPerHour();
    for (let i = 0; i < this.cookiesPurchesd.length; i++) {
      let listItemEl = document.createElement('li');
      unorderListEl.appendChild(listItemEl);
      listItemEl.textContent = this.cookiesPurchesd[i];
    }

  }

};
Tokyo.customerPerHour();
Tokyo.render();

let Dubai = {
  'shopName': 'Dubai',
  'minCustomer': 11,
  'maxCustomer': 38,
  'averageCookies': 3.7,
  'hourlyCutomer': [],
  'customerPerHour': function () {
    for (let i = 0; i < workingHour.length; i++) {
      this.hourlyCutomer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    }
  },
  'cookiesPurchesd': [],
  'cookiesPerHour': function () {
    let total = 0;
    for (let j = 0; j < workingHour.length; j++) {
      this.cookiesPurchesd.push(workingHour[j] + Math.floor(this.hourlyCutomer[j] * this.averageCookies) + ' Cookies');
      total += Math.floor(this.hourlyCutomer[j] * this.averageCookies);
    }
    return total;
  },
  'render': function () {
    let divEl = document.getElementById('cookiesShop');
    let headerEl = document.createElement('h2');
    divEl.appendChild(headerEl);
    headerEl.textContent = this.shopName;
    let unorderListEl = document.createElement('ul');
    divEl.appendChild(unorderListEl);
    let span = document.createElement('span');
    divEl.appendChild(span);
    span.textContent = 'Total :' + this.cookiesPerHour();
    for (let i = 0; i < this.cookiesPurchesd.length; i++) {
      let listItemEl = document.createElement('li');
      unorderListEl.appendChild(listItemEl);
      listItemEl.textContent = this.cookiesPurchesd[i];
    }

  }

};
Dubai.customerPerHour();
Dubai.render();


let Paris = {
  'shopName': 'Paris',
  'minCustomer': 20,
  'maxCustomer': 38,
  'averageCookies': 2.3,
  'hourlyCutomer': [],
  'customerPerHour': function () {
    for (let i = 0; i < workingHour.length; i++) {
      this.hourlyCutomer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    }
  },
  'cookiesPurchesd': [],
  'cookiesPerHour': function () {
    let total = 0;
    for (let j = 0; j < workingHour.length; j++) {
      this.cookiesPurchesd.push(workingHour[j] + Math.floor(this.hourlyCutomer[j] * this.averageCookies) + ' Cookies');
      total += Math.floor(this.hourlyCutomer[j] * this.averageCookies);
    }
    return total;
  },
  'render': function () {
    let divEl = document.getElementById('cookiesShop');
    let headerEl = document.createElement('h2');
    divEl.appendChild(headerEl);
    headerEl.textContent = this.shopName;
    let unorderListEl = document.createElement('ul');
    divEl.appendChild(unorderListEl);
    let span = document.createElement('span');
    divEl.appendChild(span);
    span.textContent = 'Total :' + this.cookiesPerHour();
    for (let i = 0; i < this.cookiesPurchesd.length; i++) {
      let listItemEl = document.createElement('li');
      unorderListEl.appendChild(listItemEl);
      listItemEl.textContent = this.cookiesPurchesd[i];
    }

  }

};

Paris.customerPerHour();
Paris.render();


let Lima = {
  'shopName': 'Lima',
  'minCustomer': 2,
  'maxCustomer': 16,
  'averageCookies': 4.6,
  'hourlyCutomer': [],
  'customerPerHour': function () {
    for (let i = 0; i < workingHour.length; i++) {
      this.hourlyCutomer.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    }
  },
  'cookiesPurchesd': [],
  'cookiesPerHour': function () {
    let total = 0;
    for (let j = 0; j < workingHour.length; j++) {
      this.cookiesPurchesd.push(workingHour[j] + Math.floor(this.hourlyCutomer[j] * this.averageCookies) + ' Cookies');
      total += Math.floor(this.hourlyCutomer[j] * this.averageCookies);
    }
    return total;
  },
  'render': function () {
    let divEl = document.getElementById('cookiesShop');
    let headerEl = document.createElement('h2');
    divEl.appendChild(headerEl);
    headerEl.textContent = this.shopName;
    let unorderListEl = document.createElement('ul');
    divEl.appendChild(unorderListEl);
    let span = document.createElement('span');
    divEl.appendChild(span);
    span.textContent = 'Total :' + this.cookiesPerHour();
    for (let i = 0; i < this.cookiesPurchesd.length; i++) {
      let listItemEl = document.createElement('li');
      unorderListEl.appendChild(listItemEl);
      listItemEl.textContent = this.cookiesPurchesd[i];
    }
  }

};

Lima.customerPerHour();
Lima.render();
