window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM. ✅
// Put some default values in the inputs ✅
// Call a function to calculate the current monthly payment ✅
function setupIntialValues() {
  const amountInput = document.querySelector('#loan-amount');
  const yearsInput = document.querySelector('#loan-years');
  const rateInput = document.querySelector('#loan-rate');
  const values = { amount: 70000, years:20, rate: 5}
  amountInput.value = values.amount;
  yearsInput.value = values.years;
  rateInput.value = values.rate;
  update();
}

// Get the current values from the UI ✅
// Update the monthly payment ✅
function update() {
  const uiValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(uiValues))
}

// Given an object of values (a value has amount, years and rate ), ✅
// calculate the monthly payment.  The output should be a string 
// that always has 2 decimal places. ✅
  // amount = p
  // years = n
  // rate = i
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const n = Math.floor(values.years * 12);
  const i = (values.rate / 100) / 12;
  return (
    (p * i) / (1 - Math.pow((1 + i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = monthly;
}
