/* ~Menu Mobile~ */
var openMenu = document.getElementById("open_menu");
var menu = document.getElementById("header_menu");

openMenu.addEventListener('click', exchangeMenu);

var changeMenu = "closed_menu"; // open_menu
var changeHeader = "hidden_menu"; //header_menu

function exchangeMenu()
{
    menu.classList.toggle(changeHeader);
}

/* ~Icons Information~ */

var text = document.querySelector('.info_text')
var icon = document.getElementById('services_icons')
var Information = document.getElementById('info_icons')
var exit = document.getElementById('exit_button')

var bar = document.getElementById('bar')
var pet = document.getElementById('pet')
var restaurant = document.getElementById('restaurant')
var wifi = document.getElementById('wifi')
var parking = document.getElementById('parkin')
var security = document.getElementById('security')
var service = document.getElementById('services')
var gardeen = document.getElementById('gardeen')
var languaje = document.getElementById('languaje')
var info = document.getElementById('info')

exit.addEventListener('click', exitFunction)

bar.addEventListener('click', barf)
pet.addEventListener('click', petf)
restaurant.addEventListener('click', restaurantf)
wifi.addEventListener('click', wifif)
parking.addEventListener('click', parkingf)
security.addEventListener('click', segurityf)
service.addEventListener('click', servicef)
gardeen.addEventListener('click', gardeenf)
languaje.addEventListener('click', languajef)
info.addEventListener('click', infof)

function barf() {
    text.innerHTML = '<h1>Bar</h1></n>lol'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function petf(){
    text.innerHTML = '<h1>Mascotas</h1></n>Se admiten bajo petición. Se pueden aplicar suplementos.'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function restaurantf(){
    text.innerHTML = '<h1>Comida y Bebida</h1></n><ul><li>Cafetería en el alojamiento</li><li>Vino / champán De pago</li><li>Bar</li><li>Restaurante</li> </ul>'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function wifif(){
    text.innerHTML = '<h1>Internet</h1></n>Hay conexión a internet Wi-Fi disponible en las zonas comunes. Gratis.'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function parkingf(){
    text.innerHTML = '<h1>Aparcamiento</h1></n>Hay parking gratis privado en el establecimiento. Es necesario reservar.'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function segurityf(){
    text.innerHTML = '<h1>Seguridad</h1></n><ul><li>Extintores</li><li>Cámaras de seguridad en las zonas comunitarias</li><li>Alarma de seguridad</li></ul>'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function gardeenf(){
    text.innerHTML = '<h1>Exteriores</h1></n>Jardín con vista a la montaña la marquesa'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function languajef(){
    text.innerHTML = '<h1>Idioma</h1></n>Español'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function infof(){
    text.innerHTML = '<h1>Infomracion General</h1></n><ul><li>Habitaciones sin humo</li><li>Habitaciones familiares</li></ul>'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}
function servicef(){
    text.innerHTML = '<h1>Servicios</h1></n><ul><li>Registro de entrada / salida privado</li><li>Recepción 24 horas</li><li>Servicio de habitaciones</li></ul>'
    icon.classList.remove('services_icons_closed')
    Information.classList.remove('info_icons_open')
}

function exitFunction()
{
    icon.classList.add('services_icons_closed')
    Information.classList.add('info_icons_open')
}

/* ~Icons Information~ */


