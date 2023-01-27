function ValidationForm() {
    let username = document.forms["RegForm"]["First name"];
    let name = document.forms["RegForm"]["Last name"];
    let email = document.forms["RegForm"]["E-mail"];
    let select = document.forms["RegForm"]["Comment or message"];
    
    if (username.value == "") {
      alert("Please provide your firstname!");
      username.focus();
      return false;
    }
    if (name.value == "") {
        alert("Please provide your lastname!");
        name.focus();
        return false;
      }
    if (email.value == "") {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if (message.value == "") {
        alert("Please provide your a comment or a message!");
        username.focus();
        return false;
      }
  
  }