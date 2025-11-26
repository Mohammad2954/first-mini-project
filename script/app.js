const navBtn=document.querySelector(".nav__btn")
flagbtn=false
navBtn.addEventListener("click" ,function(){
    if(flagbtn){
        navBtn.classList.remove("nav__btn--open")
        flagbtn=false
        
    }else{
        navBtn.classList.add("nav__btn--open")
        flagbtn=true
        

    }

})
