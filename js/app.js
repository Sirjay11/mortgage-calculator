//variable for 
let state = {
  price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
  loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
  down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
  interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
  property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
  home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
  hoa: document.querySelectorAll('[name="hoa"]')[0].value,
};

let totalLoan,
  totalMonths,
  monthlyInterest,
  monthlyPrincipalInterest,
  monthlyPropertyTaxes,
  monthlyHomeInsurance,
  monthlyHOA,
  labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"],
  backgroundColor = [
    "rgb(255, 99, 132, 1)",
    "rgb(54, 162, 235, 1)",
    "rgb(255, 206, 86, 1)",
    "rgb(75, 192, 192, 1)",
    "rgb(153, 102, 255, 1)",
    "rgb(255, 159, 64, 1)",
  ];
borderColor = [
  "rgb(255, 99, 132, 1)",
  "rgb(54, 162, 235, 1)",
  "rgb(255, 206, 86, 1)",
  "rgb(75, 192, 192, 1)",
  "rgb(153, 102, 255, 1)",
  "rgb(255, 159, 64, 1)",
];
//get numbers only
function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""));
}
//initialize chart data
let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [
          monthlyPrincipalInterest,
          monthlyPropertyTaxes,
          monthlyHomeInsurance,
          monthlyHOA,
        ],
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  },
});
myChart.options.animation = false;

//add event listener to inputs
let i;
let inputTexts = document.getElementsByClassName('form-group__textInput');
for (i = 0; i < inputTexts.length; i++) {
 inputTexts[i].addEventListener('input', updateInputsState)
}

let inputSlides = document.getElementsByClassName("form-group__range-slide");
for (i = 0; i < inputSlides.length; i++) {
  inputSlides[i].addEventListener("input", updateInputsState);
}

function updateInputsState(event) {
 let name = event.target.name;
 let value = event.target.value;
 if(name == 'price'){
  value = getNumber(value);
 }
 if(event.target.type == 'range'){
  let total = (document.getElementsByClassName(`total__${name}`))[0].innerHTML = `${value}`
 }
 state = {
  ...state,
  [name]: value
 }
 console.log(state)
}

document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
 event.preventDefault();
 document
   .getElementsByClassName("mg-page__right")[0]
   .classList.add("mg-page__right--animate");
})
console.log(inputTexts);
