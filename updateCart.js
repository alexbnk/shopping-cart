var cartTotal=0;

var updateCart = function () {
  $(".cart-list").empty();
  cartTotal = 0;
  for (var i=0 ; i< cart.length ; i++) {
    $(".cart-list").append("<p>"+cart[i].name+" -  $"+cart[i].price+"</p>");
   cartTotal = cartTotal+cart[i].price;
  }
viewCART(true);
  $(".total").empty()
  $(".total").append(cartTotal);
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}
