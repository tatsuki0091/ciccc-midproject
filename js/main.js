let cartItems = new Array();

$(document).ready(function () {
  $(".nice-textbox")
    .blur(function () {
      if ($(this).val().length === 0) {
        $(".nice-label").removeClass("focus");
      } else {
        returns;
      }
    })
    .focus(function () {
      $(".nice-textLabel").addClass("focus");
    });
  $(".nice-emailbox")
    .blur(function () {
      if ($(this).val().length === 0) {
        $(".nice-label").removeClass("focus");
      } else {
        returns;
      }
    })
    .focus(function () {
      $(".nice-emailLabel").addClass("focus");
    });
  $(".nice-textareabox")
    .blur(function () {
      if ($(this).val().length === 0) {
        $(".nice-label").removeClass("focus");
      } else {
        returns;
      }
    })
    .focus(function () {
      $(".nice-textareaLabel").addClass("focus");
    });

  $(".purchase-button").on("click", function () {
    let priceText = $(this).parent().parent().find(".price").text();
    let price = priceText.replace("Price: $", "");
    let color = $(this)
      .parent()
      .parent()
      .find("[name=color] option:selected")
      .val();
    let img = $(this).parent().parent().find(".car-img").attr("src");
    cartItems.push({ price: price, color: color, img: img });
  });

  // Shopping Cart ( Tatsuma )

  const cartButton = document.querySelector("#cart");
  const shoppingCart = document.querySelector(".shopping-cart");
  const arrow = document.querySelector(".arrow");
  const itemNum = document.querySelector(".item-num");

  let itemCount = 0;

  cartButton.addEventListener("click", function () {
    shoppingCart.classList.toggle("hidden");
    cartButton.classList.toggle("opened");
    arrow.classList.toggle("arrow-up");
  });

  const productList = document.querySelector("#product-list");

  // set rate
  const TAXRATE = 0.1;
  const SHIPPINGRATE = 15.0;

  // calculating cart

  const calculateCart = function () {
    let subTotal = 0;

    $(".product").each(function () {
      const removeComma = Number($(this.children[4]).text().replace(",", ""));
      subTotal += removeComma;
    });

    let tax = subTotal * TAXRATE;
    let shipping = subTotal > 0 ? SHIPPINGRATE : 0;
    let grandTotal = subTotal + tax + shipping;

    $("#cart-subtotal").html(
      subTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
    $("#cart-tax").html(
      tax.toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
    $("#cart-shipping").html(
      shipping.toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
    $("#cart-total").html(
      grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
  };

  // assign action

  $(".purchase-button").on("click", function () {
    alert("added to cart!");

    $(cartItems).each(function () {
      let productPrice = this.price;
      productPrice = Number(productPrice).toLocaleString();

      let productColor = this.color;

      let productImg = this.img;

      const newProduct = document.createElement("div");
      newProduct.setAttribute("class", "product");

      newProduct.innerHTML = `<div class="product-image"><img src="${productImg}" alt=""></div><div class="product-details" ><div class="product-title">Car Name</div><p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis aperiam facilis illum illo! Eveniet!</p></div><div class="product-color"><select name="color"><option value="black">Black</option><option value="red">Red</option><option value="Blue">Blue</option></select></div><div class="product-removal" ><button class="remove-product btn">Remove</button></div><div class="product-line-price">${productPrice}</div>`;

      const newProductColor = newProduct
        .getElementsByTagName("select")
        .item(0).childNodes;

      if (productColor === "Black") {
        newProductColor[0].setAttribute("selected", true);
      } else if (productColor === "Red") {
        newProductColor[1].setAttribute("selected", true);
      } else if (productColor === "Blue") {
        newProductColor[2].setAttribute("selected", true);
      }

      productList.appendChild(newProduct);

      cartItems.pop();

      calculateCart();

      itemCount++;
    });
    indicateItemNum(itemCount);
  });

  $("#cart").on("click", function () {
    calculateCart();

    cartItems = [];
  });

  $(document).on("click", ".remove-product", function () {
    removeItem(this);
    indicateItemNum(itemCount);
  });

  const removeItem = function (removeButton) {
    let prdocutRow = $(removeButton).parent().parent();
    prdocutRow.remove();
    calculateCart();
    itemCount--;
  };

  // Clear & Purchase item

  $(".remove-all").on("click", function (e) {
    const productList = document.querySelector(".product-list");
    const clearBtn = document.querySelector(".clear");
    const purchaseBtn = document.querySelector(".purchase");

    if (e.target == clearBtn && productList.children.length > 0) {
      alert("Cleared all item in the cart");
    } else if (e.target == purchaseBtn && productList.children.length > 0) {
      alert("Confirmed your order");
    }
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }
    calculateCart();
    itemCount = 0;
    indicateItemNum(itemCount);
  });

  const indicateItemNum = function (itemCount) {
    if (itemCount == 0) {
      itemNum.textContent = "";
    } else if (itemCount > 0) {
      itemNum.textContent = `(${itemCount})`;
    }
  };

  // End Shopping Cart Section
});

$(window).scroll(function () {
  $(".fadein").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200) {
      $(this).addClass("scrollin");
    }
  });
});
