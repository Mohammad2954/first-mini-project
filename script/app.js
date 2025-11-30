const navBtn=document.querySelector(".nav__btn")
const navMenu=document.querySelector(".nav-menu")
let menuLink=document.querySelectorAll(".menu_link")
let placeLinkIcon=document.querySelectorAll(".place__link--icon")
flagbtn=false
navBtn.addEventListener("click" ,function(){
    if(flagbtn){
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        flagbtn=false
        
    }else{
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        flagbtn=true
        

    }

})
menuLink.forEach(a=>{
    a.addEventListener("click",function(){
        menuLink.forEach(b=>{
            b.classList.remove("menu_link--active")
        })
        a.classList.add("menu_link--active")
    })
    
})
placeLinkIcon.forEach(a=>{
    a.addEventListener("click",()=>{
        a.classList.toggle("place__link--icon-active")
    })
})
