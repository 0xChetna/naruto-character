const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')
if (navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}
var a__parent=document.querySelectorAll(".a__parent")

a__parent.forEach(function(a__parent__item){
    a__parent__item.addEventListener("click", function(){
         
        
        a__parent.forEach(function(a__parent__item){
            a__parent__item.classList.remove("active")
           
        })
       
       
       
        a__parent__item.classList.add("active");
    })
})
window.onload=function()
{
    var hidediv=document.getElementById('nav-menu');
    document.onclick=function(div)
    {
        if(div.target.id !== 'nav-menu')
        {
            hidediv.style.display == 'none'
        }
    };
};