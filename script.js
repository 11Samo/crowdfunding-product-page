///////////////////
// MENU
//////////////////
const toggleButton = document.querySelector(".navbar-toggle");
console.log(toggleButton);
const navbarLinks = document.querySelectorAll(".navbar-links");
toggleButton.addEventListener("click", (event) => {
  const menuPart = event.target.closest(".menu-part");
  menuPart.classList.toggle("active");
  navbarLinks.forEach((link) => {
    link.classList.toggle("active");
  });
});

// const backThisProjectBtn = document.getElementById("back-this-project-btn-id");
// const bookmarkBtn = document.getElementById("bookmark-id");
// const bookmarkText = document.querySelector(".bookmark");
// const rewardBtns = document.querySelectorAll(".card-btn");

// const modalComplete = document.getElementById("modal-complete-id");
// const gotItBtn = document.getElementById("got-it-btn-id");

// const modalSupport = document.getElementById("modal-support-id");
// const closeModalBtn = document.querySelector(".close-modal-icon");
// const radioBtns = document.querySelectorAll(".radio-btn-input");
// const pledgeHeadings = document.querySelectorAll(".pledge-heading");

// //#region LISTENERES
// backThisProjectBtn.addEventListener("click", () => {
//   modalSupport.classList.add("show");
// });

// closeModalBtn.addEventListener("click", () => {
//   modalSupport.classList.remove("show");
// });

// bookmarkBtn.addEventListener("click", () => {
//   if (bookmarkBtn.checked) {
//     bookmarkText.innerHTML = "Bookmarked";
//   } else {
//     bookmarkText.innerHTML = "Bookmark";
//   }
// });

// rewardBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     modalComplete.classList.add("show");
//   });
// });

// gotItBtn.addEventListener("click", () => {
//   modalComplete.classList.remove("show");
// });

// radioBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     removeAllColorBorders();
//     addColorBorders(btn);
//   });
// });

// pledgeHeadings.forEach((heading) => {
//   heading.addEventListener("click", () => {
//     if (!heading.closest(".modal-card").classList.contains("disabled")) {
//       let radioBtn = heading
//         .closest(".modal-card-row")
//         .querySelector(".radio-btn-input");
//       radioBtn.checked = true;
//       removeAllColorBorders(heading);
//       addColorBorders(heading);
//     }
//   });
// });
// //#endregion

// const addColorBorders = (btn) => {
//   const cardEl = btn.closest(".modal-card");
//   cardEl.classList.add("highlight-borders");

//   if (!cardEl.classList.contains("no-reward")) {
//     addPledgeForm(cardEl);
//   }
// };

// const removeAllColorBorders = () => {
//   inputElements = document.querySelectorAll(".enter-pledge");

//   inputElements.forEach((element) => {
//     element.remove();
//   });

//   const highlightEls = document.querySelectorAll(".highlight-borders");

//   highlightEls.forEach((element) => {
//     element.classList.remove("highlight-borders");
//   });
// };

// const addPledgeForm = (rootElement) => {
//   const div = document.createElement("div");
//   div.classList.add("enter-pledge");
//   div.innerHTML = `
//     <p>Enter your pledge</p>
//     <label class="input" for="radio-btn-2-id">
//       <input
//         class="input-pledge"
//         type="number"
//         id="radio-btn-2-id"
//         name="stand-type"
//       />
//       <span class="dollar-sign">$</span>
//     </label>
//     <button class="btn">Continue</button>
//   `;
//   rootElement.appendChild(div);

//   const continueBtn = rootElement.querySelector(".btn");
//   continueBtn.addEventListener("click", (event) => {
//     const leftNumber = event.target
//       .closest(".modal-card")
//       .querySelector(".left-number");
//     let number = +leftNumber.innerHTML;
//     leftNumber.innerHTML = --number;

//     modalSupport.classList.remove("show");
//     modalComplete.classList.add("show");
//   });
// };
