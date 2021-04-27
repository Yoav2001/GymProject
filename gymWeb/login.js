subLogin();
const validate= ()=> {

  var email="fdsdfdsf";
  
  if( email == "" ) {
    alert( "Please provide your Email!" );
    document.myForm.EMail.focus() ;
    return false;
 }
      /*
document.getElementById('emailLogin');

  if( document.myForm.Name.value == "" ) {
     alert( "Please provide your name!" );
     document.myForm.Name.focus() ;
     return false;
  }
  if( document.myForm.EMail.value == "" ) {
     alert( "Please provide your Email!" );
     document.myForm.EMail.focus() ;
     return false;
  }
  if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
     document.myForm.Zip.value.length != 5 ) {
     
     alert( "Please provide a zip in the format #####." );
     document.myForm.Zip.focus() ;
     return false;
  }
  if( document.myForm.Country.value == "-1" ) {
     alert( "Please provide your country!" );
     return false;
  }
  */
  return( true );
}

const subLogin =()=>{
  if(validate)
    console.log('works');

};


let login = async (email,password) => {
 let credits= await axios({
        method: 'post',
        url: 'localhost:3000/users/login',
        data: {
          email: email,
          password: password
        }
      });

      if(credits !== null){
          //LOGIN THE USER

          document.location.href='';


      } else {
          // the user doesnt Exists
          
      }
}

/*fiels syste*/