function validateForm() {

var x=document.forms["myForm"]["name"].value;
if (x==null || x=="")
 {
  alert("Please enter your name");
  return false;
 }

var y=document.forms["myForm"]["email"].value;
if (y==null || y=="") {
  alert("Please enter your email");
  return false;
}
}