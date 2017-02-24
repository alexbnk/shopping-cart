      //validator function gets boolean
      // var validate = true;
      // var validator = function(validate){
      //   if (validate){
      //     alert("Validator running")
      //      $('.alert-success').toggle(true);//open success alert
      // // setTimeout($(".alert-success").toggle(false),[2000]);
      //      //remove success alert - should run after 3 sec timeout
      //   } else{
      //
      //   }
      // }
      // success function opens the success alert
      var openSuccessAlert = function(Boolean) {
          //alert("successful validation will open success alert")
          $('.alert-success').toggle(true);
      }
      // close toggle after 2000ms
      var closeSuccessAlert = function() {
          $(".alert-success").toggle(false)
      }
      var openFailAlert = function() {
        $(".alert-danger").toggle(true);
      }
      var closeFailAlert = function() {
        $(".alert-danger").toggle(false);
      }

      $("#pname").keyup(function(){
        pnameVal = $("#pname").val();
        if (RegExp(/^[a-z0-9]+$/i).test(pnameVal)){
        closeFailAlert();
        openSuccessAlert();
    } else {
      closeSuccessAlert()
      openFailAlert();
    }})
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
          } ;
      });
      var item = {};
      //runs when clicking the preview
      //creates an item object and display preview
      //closes open alert
      $("#preview").on("click", function() {
          item = {
              name: $("#pname").val(),
              price: $("#pprice").val(),
              image: $("#ppic").val()
          };
          console.log(item);
          display(item);
          closeSuccessAlert(false);
          closeFailAlert(false);
      });
      // on click submit add current product details to products array
      $("#submit").on("click", function() {
          item = {
              name: $("#pname").val(),
              price: $("#pprice").val(),
              image: $("#ppic").val()
          };
          products.push(item);
          console.log(products.length+" objects in products array "+products);
          $(this).closest('form').find("input[type=text], textarea").val("");
          closeSuccessAlert();
          closeFailAlert();
      });
      //display(item);
