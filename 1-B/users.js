$(document).ready(function(){
    let users =JSON.parse(localStorage.getItem("users")) || [];
    let userList=$("#userlist");

    if(users.length===0){
        alert("No Users Registered yet");
    }else{
        users.forEach(user=>{
            userList.append(`<li> User Name: ${user.User_Name}, Email : ${user.Email_Id} </li>`);
        });
    }
});