function formSubmit(){
    document.getElementById("form_outcome").innerHTML="Form has been sent Successfully!"
}

function login() {
  var title = document.forms["email"]["email"].value;
  var date = document.forms["password"]["password"].value;
  if (title == "") {
  alert("You must enter a valid email address.");
  }
  else {
      if (date.length == 0) {
      alert("Please enter your valid password.");
      }
      else {
        counter = 2;
        function login(){
          if(counter % 2 == 0){
            alert("You Have been logged in!")
          } else {
            alert("You Have been logged out!")
          }
          counter += 1;
        }
      }
  }
}

