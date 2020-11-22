var config = {
    apiKey: "AIzaSyBNG4i8WXYC2jxOozLSb6BS1oX9IcLMwkU",
    authDomain: "project1-99561.firebaseapp.com",
    databaseURL: "https://project1-99561.firebaseio.com",
    projectId: "project1-99561",
    storageBucket: "project1-99561.appspot.com",
    messagingSenderId: "543172513711",
    appId: "1:543172513711:web:3340083b47651952d6695a",
    measurementId: "G-E06JD553DM"
  };
  firebase.initializeApp(config);
  //Rootref is the whole database.
  const rootRef = firebase.database().ref();
  //commentsRef is just the pageCountsNode
  const UsersRef = rootRef.child('user');
document.getElementById("btn").addEventListener('click',authentication);
document.getElementById("crt").addEventListener('click',Create);
var lform=document.getElementById("Login form");
var lform1=document.getElementById("reigster-form");
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function Create(e){
    e.preventDefault();
    var getUser=lform1.user2.value.trim();
    var getPass1=lform1.pass2.value;
    var getPass2=lform1.pass3.value;
    var getmail=lform1.mail.value;
    if(getUser.trim().length===0){
        alert("Enter username");
    }
    else if(getUser.length<4){
        alert("username must be atleast 4 letters");
    }
    else if(getPass1.trim().length===0){
        alert("Enter password:");
    }
    else if(getPass1.length<4){
        alert("password must be atleast 4 letters");
    }
    else if(getPass2.trim().length===0){
        alert("enter confirm password");
    }
    else if(getPass1!==getPass2){
        alert("passwords don't match");
    }
    else if(getmail.trim().length===0){
        alert("Enter email");}
    else if(!isEmail(getmail)){
        alert("Email not valid");
    }
    else{
   setTimeout(()=>{
    var itemData,name,password,email,flag=0;
var getuserRef = firebase.database().ref('user/').orderByChild('frompage').equalTo(location.pathname);
getuserRef.once('value', function (snapshot) {
    snapshot.forEach(function (itemSnapshot) {
        //Get the object for one snapshot
        itemData = itemSnapshot.val();
        name = itemData.name;
        email=itemData.email;
        if(name===getUser||email===getmail) {flag=1;}
    })
});
setTimeout(() => {
       if(flag==1){
           alert("already exits");
        }
       else{
        alert("account created");
        var newPostRef = UsersRef.push();
         newPostRef.set({
            name: getUser,
            password: getPass1,
            email: getmail,
            frompage: location.pathname
        });
        window.location.reload();  
    }}, 2000);},1000);}

}
function authentication(e){
    e.preventDefault();
    var itemData,name,password,email,flag=0;
    var getuserRef = firebase.database().ref('user/').orderByChild('frompage').equalTo(location.pathname);
    var getUser=lform.user1.value.trim();
    var getPass=lform.pass1.value;
    getuserRef.once('value', function (snapshot) {
        snapshot.forEach(function (itemSnapshot) {
            //Get the object for one snapshot
            itemData = itemSnapshot.val();
            name = itemData.name;
            password = itemData.password;
            if(name===getUser&&password===getPass){flag=1;}
        })
    });
    setTimeout(() => {
        if(flag==0){alert("invalid username or password");}
        else{alert("logged in");window.location = "home_page.html";}
    }, 2000);
}