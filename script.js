"use strict";

// selecting elements :
const billFeild = document.querySelector(".bill-input");
const tipsContainer = document.querySelector(".tips-container");

const customTipFeild = document.querySelector(".custom-tip");
const peopleNumberFeild = document.querySelector(".people-input");

const tipResultFeild = document.querySelector(".tip-result");
const totalResultFeild = document.querySelector(".total-result");

const errorMessage = document.querySelector(".error-message");

const inputsFeilds = document.querySelectorAll("input");
const resetButton = document.querySelector(".reset-button");

// calculating the tip and the total :
// rule used to calculate the tip is : (bill * tip%) / nbPeople * 100

// getting the bill value:

// getting the tip selected:
let tip;
let bill;
let nbPeople;
tipsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  bill = +billFeild.value;
  nbPeople = +peopleNumberFeild.value;
  if (typeof bill !== "number" || typeof nbPeople !== "number") return;
  if (nbPeople == 0) {
    errorMessage.style.opacity = "1";
    peopleNumberFeild.style.border = "2px solid orangered";
  } else {
    errorMessage.style.opacity = "0";
    peopleNumberFeild.style.border = "none";
    if (e.target.classList.contains("tip")) {
      tip = +e.target.textContent.replace("%", "");
      document.querySelectorAll(".tip").forEach(function (item) {
        item.classList.remove("tip-selected");
      });
      e.target.classList.add("tip-selected");
    }

    // calculate tip amout :
    const tipAmount = ((bill * tip) / (nbPeople * 100)).toFixed(2);
    tipResultFeild.textContent = tipAmount;
    // callculate the total:
    const total = (Number(bill) + Number(tipAmount)).toFixed(2);
    totalResultFeild.textContent = total;
  }
});

// adding the event listner on the inputs:

inputsFeilds.forEach(item => {
  item.addEventListener("change", function (e) {
    e.preventDefault();
    bill = +billFeild.value;
    nbPeople = +peopleNumberFeild.value;
    if (nbPeople == 0) {
      errorMessage.style.opacity = "1";
      peopleNumberFeild.style.border = "2px solid orangered";
    } else {
      errorMessage.style.opacity = "0";
      peopleNumberFeild.style.border = "none";
      if (e.target.classList.contains("custom-tip")) {
        tip = +e.target.value;
      }

      // calculate tip amout :
      const tipAmount = ((bill * tip) / (nbPeople * 100)).toFixed(2);
      tipResultFeild.textContent = tipAmount;
      // callculate the total:
      const total = ((Number(bill)/2) + Number(tipAmount)).toFixed(2);
      totalResultFeild.textContent = total;
    }
  });
});

console.log(resetButton);
// event on the reset button:
resetButton.addEventListener("click", function (e) {
  e.preventDefault();

  billFeild.value = "";
  customTipFeild.value = "";
  peopleNumberFeild.value = "";
  tipResultFeild.textContent = "$0.00";
  totalResultFeild.textContent = "$0.00";
});
