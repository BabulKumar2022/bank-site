document.getElementById('login-submit').addEventListener('click', function(){
   // get user email
  
    const emailField =document.getElementById('user-email');
    const userEmail = emailField.value;
   //get user email
   const passwordField =document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email and pasword
 if(userEmail == 'babul@gmail.com' && userPassword == 'babul'){
   window.location.href = 'banking.html';
};

});
