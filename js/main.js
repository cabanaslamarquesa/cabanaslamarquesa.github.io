// Menu Mobile
var menu = document.getElementById("button_menu_mobile")
var menu_open = document.getElementById("mobile_menu_option")
menu.addEventListener("click", ()=>{
    menu_open.classList.toggle("menu_option-open")
})

window.location.href = "../html/maintenance.html";