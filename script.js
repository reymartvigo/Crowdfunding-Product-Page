import anime from "animejs";


// NAVIGATION
let open = document.getElementById("open-menu");
let close = document.getElementById("close-menu");
let mobileNav = document.getElementById("mobile-nav");
// NAVIGATION

// ITEM LEFT
let itemLeft = document.querySelectorAll("#item-left");
let btnSelectReward = document.querySelectorAll("#select-reward");
let productSec = document.querySelectorAll("#product");
// ITEM LEFT

// BACK THIS PROJECT MODAL
let backProject = document.getElementById("back-project-button");
let closeModal = document.getElementById("close-modal");
let backModal = document.getElementById("back-modal");
// BACK THIS PROJECT MODAL

// MODAL
let product = document.querySelectorAll("#modal");
let modal_inner = document.querySelectorAll(".modal-inner");
let enter_pledge = document.querySelectorAll(".enter-pledge");
// MODAL

// RADIO BUTTON
let select = document.getElementById("select");
let select2 = document.querySelectorAll("#select1");
// RADIO BUTTON

// NO PLEDGE
let noPledge = document.getElementById("no-pledge");
let noPledegeBtn = document.getElementById("continue-no-pledge");
// NO PLEDGE

// PLEDGE INPUT
let pledgeAmount = document.querySelectorAll("#pledge-amount");
let continueBtn = document.querySelectorAll("#continue");
// PLEDGE INPUT
let form = document.querySelectorAll("#num-form");

//  TOTAL BACKED AND PROGRESS BAR
let price = document.getElementById("price").innerText;
let progressBar = document.getElementById("progress-bar");
let totalBackers = document.getElementById("total-backers").innerText;
//  TOTAL BACKED AND PROGRESS BAR

// THANK YOU MODAL
let thankYou = document.getElementById("ty-modal");
let overlay = document.getElementById("overlay-hidden");
let gotIt = document.getElementById("got-it");
// THANK YOU MODAL

// SELECT REWARD AND ITEM MIN. PLEDGE PRICE
let selectReward = document.querySelectorAll("#select-reward");
let pledgePrice = document.querySelectorAll("#pledge-price");
// SELECT REWARD AND ITEM MIN. PLEDGE PRICE

// BOOKMARK
let bookmark = document.getElementById("bookmark");
let bookmarkSuccess = document.getElementById("bookmark-success");

// BOOKMARK

bookmark.addEventListener("click", () => {
  bookmark.style.display = "none";
  bookmarkSuccess.style.display = "flex";
});

bookmarkSuccess.addEventListener("click", () => {
  bookmark.style.display = "flex";
  bookmarkSuccess.style.display = "none";
});

// UPDATE TOTAL BACKED WHEN SELECT REWARD IS CLICKED !!
for (let i = 0; i < selectReward.length; i++) {
  selectReward[i].addEventListener("click", () => {
    let totalBacker = parseFloat(totalBackers) + 1;
    let pledgePriceVal = parseFloat(pledgePrice[i].innerText);
    let priceVal = parseFloat(price);
    document.getElementById("price").innerText = priceVal + pledgePriceVal;
    document.getElementById("total-backers").innerText = totalBacker;
    progressBar.value = progressBar.value + pledgePriceVal;
    thankYou.style.display = "flex";
    overlay.style.display = "flex";
    backModal.style.display = "none";
    document.documentElement.scrollTop = 0;
  });
}
// UPDATE TOTAL BACKED WHEN SELECT REWARD IS CLICKED !!

//  UPDATE SELECT REWARD DESIGN BASED ON ITEM LEFT
let item = document.querySelectorAll("#left");

for (let i = 0; i < item.length; i++) {
  let itemVal = parseFloat(item[i].innerText);
  if (itemVal === 0) {
    item[i].style.color = "hsl(0, 0%, 48%)";
    btnSelectReward[i].style.backgroundColor = "hsl(0, 0%, 48%)";
    btnSelectReward[i].style.cursor = "no-drop";
    btnSelectReward[i].innerText = "Out of Stock";
    btnSelectReward[i].disabled = true;
  } else {
    btnSelectReward[i].innerText = "Select Reward";
    btnSelectReward[i].disabled = false;
  }
}
//  UPDATE SELECT REWARD DESIGN BASED ON ITEM LEFT

// REMOVING THANK YOU MODAL FUNCTION
gotIt.addEventListener("click", () => {
  thankYou.style.display = "none";
  overlay.style.display = "none";
});
// REMOVING THANK YOU MODAL FUNCTION

// UPDATE TOTAL BACKED AND PROGRESS BAR
for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", (e) => {
    e.preventDefault();
    let totalBacker = parseFloat(totalBackers) + 1;
    let priceVal = parseFloat(price);
    let pledgeVal = parseFloat(pledgeAmount[i].value);
    document.getElementById("total-backers").innerText = totalBacker;
    progressBar.value = progressBar.value + pledgeVal;
    document.getElementById("price").innerText = priceVal + pledgeVal;
    thankYou.style.display = "flex";
    overlay.style.display = "flex";
    backModal.style.display = "none";
    document.documentElement.scrollTop = 0;
    clearBorder();
  });
}
// UPDATE TOTAL BACKED AND PROGRESS BAR

// NO PLEDGE EVENT LISTENER
noPledge.addEventListener("click", () => {
  clearBorder();
  noPledge.style.border = "2px solid hsl(176, 50%, 47%)";
  select.checked = true;
  noPledegeBtn.style.display = "block";
});

// NO PLEDGE EVENT LISTENER

// NO PLEDGE BUTTON EVENT LISTENER
noPledegeBtn.addEventListener("click", () => {
  thankYou.style.display = "flex";
  overlay.style.display = "flex";
  backModal.style.display = "none";
});
// NO PLEDGE BUTTON EVENT LISTENER

// PRODUCT EVENT LISTENERS
for (let i = 0; i < product.length; i++) {
  product[i].addEventListener("click", () => {
    clearBorder();
    let itemVal = parseFloat(itemLeft[i].innerText);
    if (itemVal === 0) {
      itemLeft[i].style.color = "hsl(0, 0%, 48%)";
      continueBtn[i].style.backgroundColor = "hsl(0, 0%, 48%)";
      continueBtn[i].style.cursor = "no-drop";
      continueBtn[i].innerText = "Out of Stock";
      continueBtn[i].disabled = true;
    } else {
      continueBtn[i].innerText = "Continue";
      continueBtn[i].disabled = false;
    }
    product[i].style.border = "2px solid hsl(176, 50%, 47%)";
    enter_pledge[i].style.display = "flex";
    select2[i].checked = true;
  });
}
// PRODUCT EVENT LISTENERS

// CLEAR BORDER FUNCTION
function clearBorder() {
  for (let i = 0; i < product.length; i++) {
    product[i].style.border = "1px solid rgba(128, 128, 128, 0.479)";
    enter_pledge[i].style.display = "none";
    noPledge.style.border = "1px solid rgba(128, 128, 128, 0.479)";
    select2[i].checked = false;
    select.checked = false;
    noPledegeBtn.style.display = "none";
  }
}
// CLEAR BORDER FUNCTION

// DISPLAY BACK MODAL FUNCTION
backProject.addEventListener("click", () => {
  backModal.style.display = "flex";
  overlay.style.display = "flex";
});
// DISPLAY BACK MODAL FUNCTION

// CLOSE BACK MODAL
closeModal.addEventListener("click", () => {
  clearBorder();
  backModal.style.display = "none";
  overlay.style.display = "none";
});
// CLOSE BACK MODAL

// OPEN MOBILE NAV FUNCTION
open.addEventListener("click", function () {
  let animation = anime({
    targets: ".mobile-nav-list",
    keyframes: [{ translateY: -400 }, { translateY: 400 }],
    duration: 500,
    easing: "easeOutElastic(1, 5)",
    loop: false,
  });

  open.style.display = "none";
  close.style.display = "flex";
  mobileNav.style.display = "flex";
  overlay.style.display = "flex";

  open.onclick = animation.play;
});

// OPEN MOBILE NAV FUNCTION

// CLOSE MOBILE NAV FUNCTION
close.addEventListener("click", function () {
  let animation = anime({
    targets: ".mobile-nav-list",
    keyframes: [{ translateY: 400 }, { translateY: -400 }],
    duration: 540,
    easing: "easeOutElastic(1, .8)",
    loop: false,
  });
  open.style.display = "flex";
  close.style.display = "none";

  overlay.style.display = "none";

  close.onlick = animation.play;
});
// CLOSE MOBILE NAV FUNCTION
