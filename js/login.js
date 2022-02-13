document.getElementById('submit-button').addEventListener('click', function(){
    
    //email
   const EmailField = document.getElementById('user-email');
    const useremail =EmailField.value;
    // console.log(useremail);


    //password
    const passwordField = document.getElementById('user-password');
    
    const userPassword =passwordField.value;
    // console.log(userPassword);
    
       if(useremail == 'mainul@gmail.com' && userPassword == '112211') {
           window.location.href = 'banking.html';
           
       }  
    
});

