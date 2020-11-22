var ser=document.getElementById("search");
var serbtn=document.getElementById("search_btn");
serbtn.addEventListener('click',searchfunction);

function searchfunction(){
    var Help=ser.value.trim().toLowerCase();
    if(Help===""){return;}
    else if(Help==="joker"||Help==="joker("||Help==="joker(2"||Help==="joker(20"||Help==="joker(201"||Help==="joker(2019"||Help==="joker(2019)"||Help==="joker (2019)"||Help==="joker 2019"||Help==="joker2019"){
        window.location = "Joker(2019).html";
    }
    else if(Help==="godzilla"||Help==="godzilla("||Help==="godzilla(2"||Help==="godzilla(20"||Help==="godzilla(201"||Help==="godzilla(2014"||Help==="godzilla(2014)"||Help==="godzilla2014"||Help==="godzilla 2014"){
        window.location = "Godzilla(2014).html";
    }
    else if(Help==="godzilla(2019"||Help==="godzilla(2019)"||Help==="godzilla2019"||Help==="godzilla 2019"){
        window.location = "Godzilla(2019).html";
    }
    else if(Help==="interstellar"){
        window.location = "Interstellar.html";
    }
    else if(Help==="gravity"){
        window.location = "Gravity.html";
    }
    else{
        alert("not found");
    }
}