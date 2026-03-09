const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){
nav.classList.add("show");
}else{
nav.classList.remove("show");
}

});