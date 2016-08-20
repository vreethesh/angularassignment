function get(){

var user = document.getElementById('username');
var pass = document.getElementById('password');

var usernames = [
{"uid":"test","pw":"testpass"},
{"uid":"admin","pw":"adminpass"}
];

var c=0;
for(var i=0;i<2;i++)
{
  if(user.value == usernames[i].uid && pass.value == usernames[i].pw)
  {
    c=c+1;
    window.open("mainpage.html");
    break;
  }
}
if(c==0)
{
  alert("Incorrect username or password");
}
}
