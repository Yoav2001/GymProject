function validate()
		{
			if (document.myForm.txtfname.value == "") 
			{
				alert("Please Enter First Name");
				document.myForm.focus();
				return false;
			}

			if (document.myForm.txtlname.value == "") 
			{
				alert("Please Enter Last Name");
				document.myForm.txtlname.focus();
				return false;
			}

			if (document.myForm.txtpass.value == "")
			{
				alert("Please Create your Password");
				document.myForm.txtpass.focus();
				return false;
			}

			if (document.myForm.txtmobile.value == "") 
			{
				alert("Please enter Mobile Number");
				document.myForm.txtmobile.focus();
				return false;
			}

			if (document.myForm.txtmail.value == "") 
			{
				alert("Please Enter E-Mail ID");
				document.myForm.txtmail.focus();
				return false;
			}

			if (document.myForm.txtadd.value == "") 
			{
				alert("Please Enter Address");
				document.myForm.txtadd.focus();
				return false;
			}

			if (document.myForm.dob.value == "")
			{
				alert("Please Enter Date of Birth");
				document.myForm.dob.focus();
				return false;
			}
		}
