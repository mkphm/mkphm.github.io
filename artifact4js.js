frmvalidator.addValidation("firstname","req","Please enter your First Name");
frmvalidator.addValidation("firstname","maxlen=20", "Max length for firstname is 20");
frmvalidator.addValidation("lastname","req","Please enter your Last Name");
frmvalidator.addValidation("lastname","maxlen=50", "Max length for lastname is 20");
frmvalidator.addValidation("phone","req","maxlen=15");
frmvalidator.addValidation("phone","req","numeric");
frmvalidator.addValidation("username","req","maxlen=7");
frmvalidator.addValidation("zipcode","req","maxlen=5");