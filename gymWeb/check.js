console.log('sdfdsf');

subLogin();
const validate= ()=> {

  var email="fdsdfdsf";
  
  if( email == "" ) {
    alert( "Please provide your Email!" );
    document.myForm.EMail.focus() ;
    return false;
 }
    return true;
}


 const subLogin =()=>{
    if(validate)
      console.log('works');
  
  };