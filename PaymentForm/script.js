// =====================
// MOBILE MONEY TOGGLE
// =====================

function showSection(type) {
  var apiSection = document.getElementById('section-api');
  var ussdSection = document.getElementById('section-ussd');
  var btnApi = document.getElementById('btn-api');
  var btnUssd = document.getElementById('btn-ussd');

  if (!apiSection || !ussdSection) return;

  if (type === 'api') {
    apiSection.classList.remove('hidden');
    ussdSection.classList.add('hidden');
    btnApi.classList.add('active');
    btnUssd.classList.remove('active');
  } else {
    ussdSection.classList.remove('hidden');
    apiSection.classList.add('hidden');
    btnUssd.classList.add('active');
    btnApi.classList.remove('active');
  }
}


// =====================
// MOBILE MONEY: API FLOW
// =====================

function handleApiPayment(event) {
  event.preventDefault();
  var phone = document.getElementById('api-phone').value;
  var amount = document.getElementById('api-amount').value;
  var network = document.getElementById('api-network').value;

  if (!phone || !amount || !network) return;

  alert('Payment request sent to ' + phone + ' (' + network.toUpperCase() + ') for XAF ' + Number(amount).toLocaleString() + '.\n\nOpen your MoMo app to confirm.');
}


// =====================
// MOBILE MONEY: USSD FLOW
// =====================

function handleUssdPayment(event) {
  event.preventDefault();
  var amount = document.getElementById('ussd-amount').value;

  if (!amount) return;

  var ussd = '*126*16*671234567*' + amount + '#';
  alert('Dialling: ' + ussd + '\n\nYour phone will prompt you to enter your MoMo PIN to confirm the payment.');
}


// =====================
// PAYPAL: AMOUNT DISPLAY
// =====================

function updateAmount(value) {
  var display = document.getElementById('display-amount');
  if (!display) return;

  if (value && Number(value) > 0) {
    display.textContent = 'XAF ' + Number(value).toLocaleString();
  } else {
    display.textContent = 'XAF 0';
  }
}

function setPaypalAmount() {
  var amount = document.getElementById('pp-amount').value;
  var link = document.getElementById('paypal-link');
  if (!link) return;

  if (amount && Number(amount) > 0) {
    link.href = 'https://paypal.me/liahacademy/' + amount + 'XAF';
  } else {
    link.href = 'https://paypal.me/liahacademy';
  }
}

function handlePaypal(event) {
  event.preventDefault();
}


// =====================
// CARD: FORMAT HELPERS
// =====================

function formatCard(input) {
  var value = input.value.replace(/\D/g, '');
  var formatted = value.match(/.{1,4}/g);
  input.value = formatted ? formatted.join(' ') : value;
}

function formatExpiry(input) {
  var value = input.value.replace(/\D/g, '');
  if (value.length >= 3) {
    input.value = value.slice(0, 2) + '/' + value.slice(2, 4);
  } else {
    input.value = value;
  }
}


// =====================
// CARD: SUBMIT
// =====================

function handleCardPayment(event) {
  event.preventDefault();
  var name = document.getElementById('card-name').value;
  var amount = document.getElementById('card-amount').value;

  alert('Processing payment of XAF ' + Number(amount).toLocaleString() + ' for ' + name + '.\n\nIn production, this would be sent securely to a payment API such as Stripe or Flutterwave.');
}
