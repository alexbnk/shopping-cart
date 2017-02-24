      // open\close alerts
      var openSuccessAlert = function(Boolean) {
          $('.alert-success').toggle(true);
      }
      var closeSuccessAlert = function() {
          $(".alert-success").toggle(false)
      }
      var openFailAlert = function() {
          $(".alert-danger").toggle(true);
      }
      var closeFailAlert = function() {
          $(".alert-danger").toggle(false);
      }
      //focus out closes alerts
            $("#pname").focusout(function(){
            closeFailAlert();
            closeSuccessAlert();
          });
          $("#pprice").focusout(function(){
          closeFailAlert();
          closeSuccessAlert();
        });
        $("#ppic").focusout(function(){
        closeFailAlert();
        closeSuccessAlert();
      });
      //keyup validate fields
      $("#pname").keyup(function() {
          pnameVal = $("#pname").val();
          if (RegExp(/^[a-z0-9]+$/i).test(pnameVal)) {
              closeFailAlert();
              openSuccessAlert();
          } else {
              closeSuccessAlert()
              openFailAlert();
          }
      })
      $("#pprice").keyup(function() {
          ppriceVal = $("#pprice").val();
          if (RegExp(/^\d+$/).test(ppriceVal)) {
              //alert("pprice validation")
              closeFailAlert();
              openSuccessAlert();
          } else {
              closeSuccessAlert()
              openFailAlert();
          };
      });
      $("#ppic").keyup(function() {
          ppicVal = $("#ppic").val();
          if (RegExp(/(https?:\/\/.*\.(?:png|jpg))/i).test(ppicVal)) { //testing RegExp
              openSuccessAlert();
              closeFailAlert()
          } else {
              closeSuccessAlert()
              openFailAlert();
          };
      });
      var item = {};
      //creates an item object and display preview
      $("#preview").on("click", function() {
          item = {
              name: $("#pname").val(),
              price: $("#pprice").val(),
              image: $("#ppic").val()
          };
          //console.log(item);
          display(item);
      });
      // push current item to products array,clear form, close alerts
      $("#submit").on("click", function() {
          item = {
              name: $("#pname").val(),
              price: $("#pprice").val(),
              image: $("#ppic").val()
          };
          products.push(item);
          console.log(products.length + " objects in products array " + products);
          $(this).closest('form').find("input[type=text], textarea").val("");
          closeSuccessAlert();
          closeFailAlert();
      });
