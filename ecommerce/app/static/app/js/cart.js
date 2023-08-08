let updateBtns = document.getElementsByClassName("update-cart");

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function () {
    let productId = this.dataset.product;
    console.log("productId: ", productId);
    let action = this.dataset.action;
    console.log("action: ", action);

    if (user === "AnonymousUser") {
      console.log("Log in before!");
    } else {
      updateUserOrder(productId, action);
      console.log("Log in success!");
    }
  });
}

function updateUserOrder(productId, action) {
  let url = "/update_item";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({ productId: productId, action: action }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data: ", data);
    });
}
