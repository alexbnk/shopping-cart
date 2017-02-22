var cartCount=0;
$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
   if (cartCount%2===0){
     viewCART(true);
   }//if hidden
   else viewCART(false);
   cartCount++;
});
var viewCART = function(trigger){
  // trigger is a boolean
  $('.shopping-cart').toggle(trigger);
}
