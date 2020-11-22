var field=document.querySelector('textarea');
var backup=field.getAttribute('placeholder');
var btn=document.querySelector('.btn');
var clear=document.getElementById('clear');

field.onfocus=function(){
    this.setAttribute('placeholder','');
    this.style.borderColor='red';
    btn.style.display='block';
}

field.onblur=function(){
    this.setAttribute('placeholder',backup);
    this.style.borderColor='#aaa';
}

clear.onclick=function(){
    btn.style.display='none';
    field.value='';
}