/*
Name: contactjs.js
Author: Ruifu Wang
Description: save data from form
*/
/*js code provided by ChatGPT*/ 
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var enquiry = document.getElementById("enquiry").value;
  
    
    var formData = {
        fname: fname,
        lname: lname,
        email: email,
        enquiry: enquiry
    };
  
    
    var formDataJson = JSON.stringify(formData);
  
    
    localStorage.setItem("formData", formDataJson);
  
    
    alert("Form has submitted！");
    document.getElementById("myForm").reset();
  });
  