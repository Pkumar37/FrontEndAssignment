

// document.querySelector('form.needs-validation').addEventListener('submit', function (e) {
//     var queryString = $('#needs-validation').serialize();

//     //prevent the normal submission of the form
//     e.preventDefault();
//     console.log('This is not  ddd d d qqqqqauaiuiiiiui')
//     console.log(queryString);    
// });


function storedata(){

    var formData = {};
    formData.firstName = document.getElementById('firstName').value;
    formData.lastName = document.getElementById('lastName').value;
    formData.email = document.getElementById('email').value;
    formData.address = document.getElementById('address').value;
    formData.country = document.getElementById('country').value;
    formData.postcode = document.getElementById('postcode').value;
    formData.cardname = document.getElementById('cc-name').value;
    formData.cardnumber = document.getElementById('cc-number').value;
    formData.expiry = document.getElementById('cc-expiration').value;
    formData.cvv = document.getElementById('cc-cvv').value;
    console.log(formData);
  
  }
    
  document.querySelector('form.needs-validation').addEventListener('submit', function (e) {
  
      //prevent the normal submission of the form
      e.preventDefault();
      storedata(); 
      //console.log(formData);    
  });
  

  