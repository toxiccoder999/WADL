$(document).ready(function(){
    const form=$("#Registration_Form");
    $("#btn1").click(function(){
   const user ={
        User_Name:$("#User_Name").val(),
        Email_Id:$("#Email_Id").val()
   };
   let users = JSON.parse(localStorage.getItem("users")) || [];
   users.push(user);
   localStorage.setItem("users",JSON.stringify(users));

   alert("User Registered Sucessfully");

   form.reset();
    });
});