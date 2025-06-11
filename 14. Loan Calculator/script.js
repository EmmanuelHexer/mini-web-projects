function calculateLoan() {
  const loanAmountEl = document.getElementById("loan-amount").value;
  const interestRateEl = document.getElementById("interest-rate").value;
  const monthsToPayEl = document.getElementById("months-to-pay").value;
  const paymentEl = document.getElementById("payment");
  const interest = (loanAmountEl * interestRateEl * 0.01) / monthsToPayEl;

  const monthlyPayment = loanAmountEl / (monthsToPayEl + interest);

  paymentEl.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
}
