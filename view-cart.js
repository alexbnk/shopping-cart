var cartCount = 0;
$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle(cartCount%2===0);
  cartCount++;
});
