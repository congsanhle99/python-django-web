let updateBtns = document.getElementsByClassName("update-cart");

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function () {
    let productId = this.dataset.product;
    console.log("productId: ", productId);
    let action = this.dataset.action;
    console.log("action: ", action);

    if (user === "AnonymousUser") {
      console.log("Please log in before!");
    } else {
      console.log("Log in success!");
    }
  });
}
