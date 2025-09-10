const amount = document.querySelector('.js-mortgage-amount');
const term = document.querySelector('.js-mortgage-term');
const interest = document.querySelector('.js-interest-rate');
const amtError = document.querySelector('.js-amount-errormsg')
const calculateBtn = document.querySelector('.js-calculate-button')
const termError = document.querySelector('.js-term-errormsg')
const interestError = document.querySelector('.js-interest-errormsg')
const typeError = document.querySelector('.js-type-errormsg')
const repaymentOpt = document.querySelector('.js-repayment-option')
const interestOpt = document.querySelector('.js-interest-option')
const repaymentBtn = document.querySelector('.js-repayment-button')
const interestBtn = document.querySelector('.js-interest-button')
const clearBtn = document.querySelector('.js-clear')
let timer;


function calculateMonthlyRepayment(amount, term, interest) {
  const monthlyRate = interest.value / 100 / 12;
  const totalPayments = term.value * 12;

  if (monthlyRate === 0) {
    return amount.value / totalPayments;
  }

  const monthlyPayment = amount.value * (
    monthlyRate * Math.pow(1 + monthlyRate, totalPayments)
  ) / (
    Math.pow(1 + monthlyRate, totalPayments) - 1
  );
  return monthlyPayment;
}


function calculateInterestOnlyMonthlyPayment(amount, interest) {
  const monthlyRate = interest.value / 100 / 12;
  let pay= amount.value * monthlyRate;
  return pay 
}



calculateBtn.addEventListener('click', () => {
    if (amount.value==="") {
        amtError.style.display='block'
        // setTimeout(() => {
        // amtError.style.display='none'
        // }, 3000) 
        return
    }

    if (term.value===""){
        termError.style.display='block'
        // setTimeout(() => {
        // termError.style.display='none'
        // }, 3000) 
        return
    }

    if (interest.value==="") {
        interestError.style.display='block'
        // setTimeout(() => {
        // interestError.style.display='none'
        // }, 3000) 
        return
    }

    if (repaymentOpt.checked===false && interestOpt.checked===false) {
    typeError.style.display='block'
        // setTimeout(() => {
        // typeError.style.display='none'
        // }, 3000)
        return
    }

const payment = calculateMonthlyRepayment(amount, term, interest).toFixed(2)
totalRepayment = payment*12*term.value;

const interestPayment =  calculateInterestOnlyMonthlyPayment(amount, interest).toFixed(2)

const totalInterestPayment = interestPayment*12*term.value + Number(amount.value);

if (repaymentOpt.checked===true) {
    document.querySelector('.js-payments-page').innerHTML = `<div class="text-[25px]">Your results</div>
      <div>
        Your results are shown below based on the information you provided.
        To adjust the results, edit the form and click “calculate repayments” again.




      </div>


      <div style="background-color: hsl(202, 55%, 16%); border-color: hsl(61, 70%, 52%);" class="mt-[7%] rounded-md border-t-[3px] p-[4%]">
      Your monthly repayments
      <div style="color: hsl(61, 70%, 52%);;" class="text-5xl mb-[7%]">£${payment}</div>


      <div class="pt-[10%] border-t">
      Total you'll repay over the term
      <div class="text-xl pt-[2%]">£${totalRepayment}</div>
      </div> 

      </div>
`
}


if (interestOpt.checked===true) {
     document.querySelector('.js-payments-page').innerHTML = `<div class="text-[25px]">Your results</div>
      <div>
        Your results are shown below based on the information you provided.
        To adjust the results, edit the form and click “calculate repayments” again.




      </div>


      <div style="background-color: hsl(202, 55%, 16%); border-color: hsl(61, 70%, 52%);" class="mt-[7%] rounded-md border-t-[3px] p-[4%]">
      Your monthly repayments
      <div style="color: hsl(61, 70%, 52%);;" class="text-5xl mb-[7%]">£${interestPayment}</div>


      <div class="pt-[10%] border-t">
      Total you'll repay over the term
      <div class="text-xl pt-[2%]">£89</div>
      </div> 

      </div>
`
    
}


    
    
   
})


amount.addEventListener('focus', () => {
    amtError.style.display='none'
    
})
term.addEventListener('focus', () => {
    termError.style.display='none'
})
interest.addEventListener('focus', () => {
    interestError.style.display='none'
})
repaymentOpt.addEventListener('click', () => {
    typeError.style.display='none'
})
interestOpt.addEventListener('click', () => {
    typeError.style.display='none'
})

repaymentBtn.addEventListener('click', () => {
    repaymentOpt.checked=true;
   repaymentBtn.style.color="hsl(61, 70%, 52%)"
   interestBtn.style.color="hsl(200, 24%, 40%)"
})

interestBtn.addEventListener('click', () => {
    interestOpt.checked=true;
   interestBtn.style.color="hsl(61, 70%, 52%)"
   repaymentBtn.style.color="hsl(200, 24%, 40%)"
})

clearBtn.addEventListener('click', () => {
    amount.value=""
    term.value=""
    interest.value=""
    repaymentOpt.checked=false
    interestOpt.checked=false
    repaymentBtn.style.color="hsl(200, 24%, 40%)"
    interestBtn.style.color="hsl(200, 24%, 40%)"
})



