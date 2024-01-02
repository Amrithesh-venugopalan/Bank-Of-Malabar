'use strict';

const account1 = {
  owner: 'amrithesh',
  movements: [
    [2000, 'venu'],
    [3000, 'venu'],
    [-2000, 'namitha'],
    [5500, 'sheeba'],
    [2200, 'subhash'],
    [-1800, 'subhash'],
    [2305.55, 'venu'],
  ],
  interestRate: 1.2,
  pin: 1111,
  recentContacts: ['venu', 'namitha', 'sheeba', 'subhash'],

  movementsDates: [
    '2023-08-17T10:31:17.178Z',
    '2023-08-16T07:42:02.383Z',
    '2023-07-28T09:15:04.904Z',
    '2023-06-01T10:17:24.185Z',
    '2023-06-08T14:11:59.604Z',
    '2023-06-26T17:01:17.194Z',
    '2023-05-28T23:36:17.929Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
  maxloan: 10000,
  totalLoan: 0,
};

const account2 = {
  owner: 'namitha',
  movements: [
    [1000, 'venu'],
    [5000, 'venu'],
    [-2000, 'amrithesh'],
    [500, 'sheeba'],
    [-2700, 'subhash'],
    [-800, 'subhash'],
    [2605, 'venu'],
    [5000, 'venu'],
    [-2000, 'amrithesh'],
    [500, 'sheeba'],
    [-2700, 'subhash'],
    [-800, 'subhash'],
    [2605, 'venu'],
  ],
  interestRate: 1.6,
  pin: 2222,
  recentContacts: ['venu', 'amrithesh', 'sheeba', 'subhash'],

  movementsDates: [
    '2023-07-18T21:31:17.178Z',
    '2023-07-23T07:42:02.383Z',
    '2023-07-28T09:15:04.904Z',
    '2023-07-01T10:17:24.185Z',
    '2023-07-08T14:11:59.604Z',
    '2023-07-26T17:01:17.194Z',
    '2023-07-28T23:36:17.929Z',
    '2023-07-28T20:34:17.929Z',
    '2023-06-28T23:36:17.929Z',
    '2023-06-28T20:36:17.929Z',
    '2023-05-28T23:36:17.929Z',
    '2023-04-28T23:36:17.929Z',
    '2023-03-28T23:36:17.929Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
  maxloan: 50000,
  totalLoan: 0,
};
const account3 = {
  owner: 'sheeba',
  movements: [
    [8000, 'venu'],
    [-2000, 'venu'],
    [200, 'namitha'],
    [5500, 'amrithesh'],
    [-2200, 'subhash'],
    [1800, 'subhash'],
    [2300, 'venu'],
  ],
  interestRate: 1.4,
  pin: 3333,
  recentContacts: ['venu', 'namitha', 'amrithesh', 'subhash'],

  movementsDates: [
    '2023-07-18T21:31:17.178Z',
    '2023-06-23T07:42:02.383Z',
    '2023-05-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-03-08T14:11:59.604Z',
    '2022-08-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
  maxloan: 20000,
  totalLoan: 0,
};
const account4 = {
  owner: 'venu',
  movements: [
    [5500, 'subhash'],
    [-1000, 'amrithesh'],
    [2200, 'namitha'],
    [5000, 'sheeba'],
    [-2200, 'subhash'],
    [1800, 'sheeba'],
    [-2300, 'namitha'],
  ],
  interestRate: 1.6,
  pin: 4444,
  recentContacts: ['subhash', 'namitha', 'amrithesh', 'sheeba'],

  movementsDates: [
    '2023-07-18T21:31:17.178Z',
    '2023-06-23T07:42:02.383Z',
    '2023-05-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-03-08T14:11:59.604Z',
    '2022-08-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
  maxloan: 200000,
  totalLoan: 0,
};
const account5 = {
  owner: 'subhash',
  movements: [
    [5000, 'venu'],
    [-1500, 'amrithesh'],
    [-2200, 'namitha'],
    [4000, 'sheeba'],
    [-2200, 'venu'],
    [6000, 'sheeba'],
    [-2500, 'namitha'],
  ],
  interestRate: 1.6,
  pin: 5555,
  recentContacts: ['venu', 'namitha', 'amrithesh', 'sheeba'],

  movementsDates: [
    '2023-07-18T21:31:17.178Z',
    '2023-06-23T07:42:02.383Z',
    '2023-05-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-03-08T14:11:59.604Z',
    '2022-08-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
  maxloan: 200000,
  totalLoan: 0,
};
const accounts = [account1, account2, account3, account4, account5];

/***********ELEMENTS*************/
const inputLoginUsername = document.getElementById('username');
const inputLoginPassword = document.getElementById('password');
const btnLogin = document.querySelector('.btn--login');

const containerOneEl = document.querySelector('.container--one');
const containerTwoEl = document.querySelector('.container--two');

const btnLogout = document.querySelector('.btn--log-out');
const containerMovementsEl = document.querySelector('.container--movements');
const chatboxEl = document.querySelector('.chat-box');

const recentContactsEl = document.querySelector('.container--recent-contacts');

const containerBalanceEl = document.querySelector('.balance--text');
const balanceEl = document.querySelector('.balance');
const balanceDateEl = document.querySelector('.balance--date');

const valueInEl = document.querySelector('.summary--value--in');
const valueOutEl = document.querySelector('.summary--value--out');
const valueIntrestEl = document.querySelector('.summary--value--interest');

const btntransferMoney = document.querySelector('.form--btn--transfer');
const transferToEl = document.querySelector('.form--input--to');
const transferAmountEl = document.querySelector('.form--input--amount');

const btnLoan = document.querySelector('.form--btn--loan');
const loanAmountEl = document.querySelector('.form--input--loan-amount');

const btnCloseAcc = document.querySelector('.form--btn--close');
const closeUserEl = document.querySelector('.form--input--user');
const closePassEl = document.querySelector('.form--input--pin');

const logoutTimerEl = document.querySelector('.logout-timer .timer');

/**********FUNCTIONS*************/
function createUserName(accs) {
  accs.forEach(acc => (acc.userName = acc.owner.toLowerCase().slice(0, 3)));
}

function toggleContainer() {
  containerOneEl.classList.toggle('zero-sized-container');
  containerTwoEl.classList.toggle('zero-sized-container');

  transferAmountEl.value = transferToEl.value = '';
  loanAmountEl.value = '';
  closeUserEl.value = closePassEl.value = '';
}

function displayPA(text) {
  chatboxEl.textContent = text;
}

function calcBalance(acc) {
  let balance = acc.movements.reduce((acc, mov) => acc + mov[0], 0);
  return balance;
}
const startLogOutTimer = function () {
  let time = 120;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    logoutTimerEl.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      toggleContainer();
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
function formatMovementDate(date, locale) {
  const daysPassed = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };
  let days = daysPassed(date, new Date());
  if (days === 0) return 'Today';
  if (days === 1) return 'yesterday';
  if (days <= 7) return `${days} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}

function formatCurrentMov(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

function displaySummary(acc) {
  let incoming = 0;
  let outgoing = 0;
  let intrest;
  acc.movements.forEach(mov => {
    // console.log(mov);
    mov[0] > 0 ? (incoming += mov[0]) : (outgoing += mov[0]);
  });
  intrest =
    (calcBalance(acc) - currentAccount.totalLoan) * (acc.interestRate - 1);
  console.log(currentAccount.totalLoan);
  valueInEl.textContent = `₹ ${incoming.toFixed(2)}`;
  valueOutEl.textContent = `₹ ${Math.abs(outgoing).toFixed(2)}`;
  valueIntrestEl.textContent = `₹ ${intrest.toFixed(2)}`;
}

function displayBalance(acc) {
  balanceEl.textContent = `₹ ${calcBalance(acc).toFixed(2)}`;
  let presentDate = new Date();
  balanceDateEl.textContent = `As of ${String(presentDate.getDate()).padStart(
    2,
    '0'
  )}/${String(presentDate.getMonth()).padStart(
    2,
    '0'
  )}/${presentDate.getFullYear()}`;
}

function displayMovements(acc) {
  containerMovementsEl.innerHTML = '';
  acc.movements.forEach((mov, i) => {
    const type = mov[0] > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, currentAccount.locale);
    const displayMov = formatCurrentMov(
      mov[0],
      currentAccount.locale,
      currentAccount.currency
    );
    const html = `          
    <div class="movements--row">
        <div class="movements--type movements--type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements--date">${displayDate}</div>
        <div class="movements--value">${displayMov}</div>
    </div>`;
    containerMovementsEl.insertAdjacentHTML('beforeend', html);
  });
  containerMovementsEl.lastChild.style.borderBottom = 'none';
}

function displayRecent(acc) {
  recentContactsEl.innerHTML = '';
  acc.recentContacts.forEach(contact => {
    const html = `
          <div class="contact ${contact}">
            <ion-icon
              class="svg--contact ${contact}"
              name="person-circle-outline"
            ></ion-icon>
            <p class="name ${contact}">${contact}</p>
          </div>
    `;
    recentContactsEl.insertAdjacentHTML('beforeend', html);
  });
}
function updateUI(acc) {
  displayMovements(acc);
  displayBalance(acc);
  displaySummary(acc);
}
createUserName(accounts);
console.log(accounts);
/**********EVENT HANDLERS*********/
let currentAccount, timer;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPassword.value) {
    toggleContainer();
    displayRecent(currentAccount);
    displayPA(`welcome back ${currentAccount.owner}`);
    updateUI(currentAccount);
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});
btntransferMoney.addEventListener('click', function (e) {
  e.preventDefault();
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
  let currentBalance = calcBalance(currentAccount);
  let transferAmount = transferAmountEl.value;
  let receiverAccount = accounts.find(
    acc => acc.userName === transferToEl.value
  );
  if (transferAmount > currentBalance) displayPA('Insufficient balance !');
  if (
    transferAmount &&
    receiverAccount &&
    transferAmount <= currentBalance &&
    receiverAccount?.userName !== currentAccount.userName
  ) {
    transferAmountEl.value = transferToEl.value = '';
    currentAccount.movements.unshift([-transferAmount, receiverAccount.owner]);
    currentAccount.movementsDates.unshift(new Date().toISOString());
    receiverAccount.movements.unshift([+transferAmount, currentAccount.owner]);
    receiverAccount.movementsDates.unshift(new Date().toISOString());
    updateUI(currentAccount);
    displayPA('Transfer Successful !');
  } else {
    let text =
      transferAmount > currentBalance
        ? 'Insufficient balance to complete the transfer !'
        : 'OOPS ! something wrong , please check the credentials again .';
    displayPA(text);
  }
});
btnLogout.addEventListener('click', function (e) {
  e.preventDefault();
  toggleContainer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
  let loanAmount = Math.floor(loanAmountEl.value);
  console.log(`total loan-${currentAccount.totalLoan}`);
  if (
    loanAmount > 0 &&
    currentAccount.totalLoan + loanAmount <= currentAccount.maxloan &&
    currentAccount.movements.some(mov => mov[0] >= loanAmount * 0.1)
  ) {
    console.log('loan approved');
    currentAccount.totalLoan += loanAmount;
    setTimeout(function () {
      currentAccount.movements.unshift([loanAmount, 'bank-loan']);
      currentAccount.movementsDates.unshift(new Date().toISOString());
      displayPA('Loan Approved !');
      updateUI(currentAccount);
      loanAmountEl.value = '';
    }, 2500);
  } else {
    let text =
      currentAccount.totalLoan + loanAmount > currentAccount.maxloan
        ? `Sry ${currentAccount.owner} ! your max loan limit is ₹ ${currentAccount.maxloan}.`
        : 'Unable to provide Loan,Please read terms and conditions.';
    displayPA(text);
  }
});
btnCloseAcc.addEventListener('click', function (e) {
  e.preventDefault();
  let currentUser = closeUserEl.value;
  let passGiven = closePassEl.value;
  console.log(passGiven);
  console.log(typeof currentAccount.pin, typeof Number(passGiven));
  if (
    currentAccount.userName === currentUser &&
    currentAccount.pin === +passGiven
  ) {
    let index = accounts.indexOf(currentAccount);
    toggleContainer();
    accounts.splice(index, 1);
    console.log(accounts);
  } else displayPA('Credentials invalid ! check again');
});
recentContactsEl.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(currentAccount.movements);
  console.log(currentAccount.movementsDates);
  let nameOfContact = event.target.classList[1];
  let filteredAcc = {
    movements: [
      ...currentAccount.movements.filter(mov => mov[1] === nameOfContact),
    ],
    movementsDates: [
      ...currentAccount.movements
        .map((mov, i) => {
          if (mov[1] === nameOfContact) return currentAccount.movementsDates[i];
        })
        .filter(mov => mov),
    ],
    currency: 'INR',
    locale: 'en-IN',
  };
  console.log(filteredAcc);
  transferToEl.value = accounts.find(
    acc => acc.owner === nameOfContact
  ).userName;

  displayMovements(filteredAcc);
});
