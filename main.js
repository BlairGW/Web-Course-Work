function formSubmit(){
    document.getElementById("form_outcome").innerHTML="Form has been sent Successfully!"
}

counter = 2;
        function login(){
          if(counter % 2 == 0){
            alert("You Have been logged in!")
          } else {
            alert("You Have been logged out!")
          }
          counter += 1;
        }