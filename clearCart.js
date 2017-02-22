var clearCart = function () {
	// clears the selected items from cart list div
  $(".cart-list").empty();

  	// clears array in JS file
   	cart.splice(0, cart.length);

	//or cart = [];
}

