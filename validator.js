var ppicVal=undefined;
//var urlRegexp={"/(https?:\/\/.*\.(?:png|jpg))/i"
var item = {};
$("#preview").on("click", function(){
item = {name:$("#pname").val(),price:$("#pprice").val(),image:$("#ppic").val()};
console.log(item);
display(item);
});
$("#ppic").keyup(function(){
ppicVal = $("#ppic").val();
if (RegExp(/(https?:\/\/.*\.(?:png|jpg))/i).test(ppicVal)){//testing RegExp
$('.alert-success').toggle(true);
}
});
// on click submit add to products array
$("#submit").on("click", function(){
  item = {name:$("#pname").val(),price:$("#pprice").val(),image:$("#ppic").val()};
products.push(item);
$(this).closest('form').find("input[type=text], textarea").val("");
});
//display(item);
