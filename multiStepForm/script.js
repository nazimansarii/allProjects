// next button
const formStep = document.querySelectorAll(".form-step");
const nextButtons = document.querySelectorAll(".next-btn");
const steps = document.querySelectorAll(".step-count");
const firstStepInput = document.querySelectorAll(".first-step-input");
const required = document.querySelectorAll(".required");
const selectedPlan = document.querySelectorAll('input[type="radio"]:checked');

let planSelected = [];

let currentStep = 0;

// show the first step
const inputValidation = () => {
  let isValid = true;
  firstStepInput.forEach((input) => {
    if (input.value === "") {
      isValid = false;
      required.forEach((err) => (err.style.display = "block"));
      input.addEventListener("click", (e) => {
        const span = e.target.parentElement.querySelector("span");
        span.style.display = "none";
      });
      return; // Exit the loop early if an empty input is found
    }

    if (input.getAttribute("type") === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        isValid = false;
        required[1].style.display = "block";

        return; // Exit the loop early if an invalid email is found
      }
    } else if (input.getAttribute("type") === "tel") {
      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(input.value)) {
        isValid = false;
        required[2].style.display = "block";

        return; // Exit the loop early if an invalid phone number is found
      }
    }
  });
  return isValid;
};

// Select all plan containers
const planContainers = document.querySelectorAll(".plan-container");

planContainers.forEach((container) => {
  container.addEventListener("click", () => {
    const input = container.querySelector('input[type="radio"]');
    input.checked = true;
    document.querySelector(".error").style.display = "none";
    // Remove active styles from all containers
    planContainers.forEach((c) => c.classList.remove("selected"));

    // Add a visual class for the selected container
    container.classList.add("selected");
  });
});

// Toggle button for months & years subscription
const toggleButton = document.querySelector(".toggle-button");
toggleButton.addEventListener("click", (e) => {
  const div = e.target;
  div.classList.toggle("active");
  const monthlyPlans = document.querySelector(".monthly-plan");
  const yearlyPlans = document.querySelector(".yearly-plan");
  const yearly = document.querySelectorAll(".yearly");
  const priceYearly = document.querySelectorAll(".price-yearly");
  const exAmounts = document.querySelectorAll(".ex-amount"); // Add-ons amounts

  if (div.classList.contains("active")) {
    yearly.forEach((year) => (year.style.display = "block"));

    yearlyPlans.classList.remove("inactive");
    monthlyPlans.classList.add("inactive");
  } else {
    yearly.forEach((year) => (year.style.display = "none"));

    yearlyPlans.classList.add("inactive");
    monthlyPlans.classList.remove("inactive");
  }

  // Update plan prices
  priceYearly.forEach((el) => {
    const monthly = el.getAttribute("data-monthly");
    const yearly = el.getAttribute("data-yearly");
    div.classList.contains("active")
      ? (el.innerHTML = `$${yearly}` + "/yr")
      : (el.innerHTML = `$${monthly}` + "/mo");
  });

  // Update add-ons prices
  exAmounts.forEach((amount) => {
    const monthly = amount.getAttribute("data-monthly");
    const yearly = amount.getAttribute("data-yearly");
    amount.textContent = div.classList.contains("active")
      ? `+$${yearly}/yr`
      : `+$${monthly}/mo`;
  });
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentStep === 0 && !inputValidation()) return;
    const selectedPlan = document.querySelector('input[name="plan"]:checked');

    // Reset styles
    if (currentStep === 1) {
      if (!selectedPlan) {
        document.querySelector(".error").style.display = "block";
        return;
      }
      const parentElement = selectedPlan.parentElement;
      const planName = parentElement.querySelector("p").textContent;
      const planPrice = parentElement.querySelector("span").textContent;
      const newAdd = { planName, planPrice };

      // Remove active styles from all containers
      planSelected = planSelected.filter(
        (item) => item.planName === planSelected.planName
      );
      planSelected.push(newAdd);

      // summary to show the selected plan
      const planType = document.querySelector(".plan-type");
      const subTotalAmount = document.querySelector(".summary-amount");
      planSelected[0].planPrice.includes("yr")
        ? (planType.innerHTML = `${planSelected[0].planName} (Yearly)`)
        : (planType.innerHTML = `${planSelected[0].planName} (Monthly)`);

      planSelected[0].planPrice.includes("yr")
        ? (subTotalAmount.innerHTML = `${planSelected[0].planPrice}`)
        : (subTotalAmount.innerHTML = `${planSelected[0].planPrice}`);
    }

    if (currentStep === 2) {
      const addOns = document.querySelectorAll('input[name="add-ons"]');
      const error = document.querySelector(".addons");

      // Add event listeners to each checkbox
      addOns.forEach((addon) => {
        addon.addEventListener("click", () => {
          if (addon.checked) {
            error.style.display = "none";
          }
        });
      });

      const checked = Array.from(addOns).some((addon) => addon.checked);
      if (!checked) {
        error.style.display = "block";
        return;
      } else {
        error.style.display = "none";
      }
      updateSummary();
    }

    // Proceed with selected plan
    if (currentStep < formStep.length - 1) {
      // check if the current step is the last step
      formStep[currentStep].classList.remove("active");
      steps[currentStep].classList.remove("active");
      currentStep++;
      formStep[currentStep].classList.add("active");
      currentStep < 4 ? steps[currentStep].classList.add("active") : "";
    }
  });
});

// back button
const goBack = document.querySelectorAll(".go-back");
goBack.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentStep >= 0) {
      formStep[currentStep].classList.remove("active");
      steps[currentStep].classList.remove("active");

      currentStep--;
      formStep[currentStep].classList.add("active");
      steps[currentStep].classList.add("active");
    }
  });
});

// change plan on clicked button
const changePlan = document.querySelector(".change-btn");
changePlan.addEventListener("click", () => {
  formStep[currentStep].classList.remove("active");
  currentStep = 1;
  formStep[currentStep].classList.add("active");
});

document.querySelector(".form").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

// Function to update the summary dynamically
function updateSummary() {
  const planTypeElement = document.querySelector(".plan-type");
  const summaryAmountElement = document.querySelector(".summary-amount");
  const selectedAddOnsContainer = document.querySelector(".step4-container");
  const totalPlanElement = document.querySelector(".total-amount p");
  const totalAmountElement = document.querySelector(".total-amount span");

  // Clear existing add-ons in the summary
  const addOnsElements =
    selectedAddOnsContainer.querySelectorAll(".selected-add-ons");
  addOnsElements.forEach((el) => el.remove());

  // Update plan type and price
  if (planSelected.length > 0) {
    const { planName, planPrice } = planSelected[0];
    planTypeElement.textContent = planPrice.includes("yr")
      ? `${planName} (Yearly)`
      : `${planName} (Monthly)`;
    summaryAmountElement.textContent = planPrice;
  }

  // Get selected add-ons
  const addOns = document.querySelectorAll('input[name="add-ons"]:checked');
  let totalAddOnsPrice = 0;

  addOns.forEach((addon) => {
    const parent = addon.closest(".step3-container");
    const addOnName = parent.querySelector(".ex-content p").textContent;
    const addOnPrice = parent.querySelector(".ex-amount").textContent;

    // Add add-on to the summary
    const addOnElement = document.createElement("div");
    addOnElement.classList.add("selected-add-ons");
    addOnElement.innerHTML = `<p>${addOnName}</p><span>${addOnPrice}</span>`;
    document.querySelector(".step4-container").appendChild(addOnElement);
    // Calculate total add-ons price
    const priceValue = parseFloat(addOnPrice.replace(/[^\d]/g, ""));
    totalAddOnsPrice += priceValue;
  });

  // Calculate and update total amount
  const planPriceValue = parseFloat(
    planSelected[0].planPrice.replace(/[^\d]/g, "")
  );
  const totalPrice = planPriceValue + totalAddOnsPrice;
  totalAmountElement.textContent = planSelected[0].planPrice.includes("yr")
    ? `+$${totalPrice}/yr`
    : `+$${totalPrice}/mo`;
  planSelected[0].planPrice.includes("yr")
    ? (totalPlanElement.innerHTML = `Total (per Year)`)
    : (totalPlanElement.innerHTML = `Total (per Month)`);
}
