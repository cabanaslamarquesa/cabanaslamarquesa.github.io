import React from 'react';

import m1 from '../assets/duquesa/1.jpg'
import m2 from '../assets/duquesa/2.jpg'
import m3 from '../assets/duquesa/3.jpg'
import m4 from '../assets/duquesa/4.jpg'
import m5 from '../assets/duquesa/5.jpg'

import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'
import img7 from '../assets/img/7.jpg'
import img8 from '../assets/img/8.jpg'

const bd = (obj) => {

    const chalets = {
        'duquesa':{
            'title':'Cabaña Duquesa',
            'img': [m1,m2,m3,m4,m5],
            'description': ['Capacidad: 6', 'Camas: 3', 'Baños: 1'],
            'information': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam eligendi voluptatibus eveniet earum? Tempora omnis ratione at ut vero perferendis necessitatibus possimus, nam deserunt exercitationem nostrum suscipit unde. Error atque officia nam est laborum quaerat quidem sed quam eligendi facere nostrum, tenetur natus aut saepe molestias tempore expedita suscipit.",
            'icons': ['bar','tv-retro','shower','toilet','wifi'],
            'price':'360.000'
        },
        'familiar':{
            'title':'Cabaña Familiar',
            'img': [img1,img4,img5,img6,img7],
            'description': ['Capacidad: 5', "Pisos: 2", 'Camas: 3', 'Baños: 1'],
            'information': "Cabaña grande de 2 niveles con una capacidad total de 8 huspedes en acomodacion multiple, dotada de baño privado con agua caliente mediante ducha electrica, telivison, mini-bar y acceso a internet",
            'icons': ['bar','tv-retro','shower','toilet','wifi'],
            'price':'300.000'
        },
        'marquesa':{
            'title':'Cabaña la Marquesa',
            'img': [img1,img4,img5,img6,img7],
            'description': ['Capacidad: 8', "Pisos: 2", 'Camas: 4', 'Baños: 1'],
            'information': "Cabaña grande de 2 niveles con una capacidad total de 8 huspedes en acomodacion multiple, dotada de baño privado con agua caliente mediante ducha electrica, telivison, mini-bar y acceso a internet",
            'icons':['bar','tv-retro','shower', 'toilet'],
            'price':'480.000'
        },
        'couple-deluxe':{
            'title':'Cabana para Pareja Deluxe',
            'img': [img1,img4,img5,img6,img7],
            'description': ['Capacidad: 3', "Pisos: 2", 'Camas: 3'],
            'information': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam eligendi voluptatibus eveniet earum? Tempora omnis ratione at ut vero perferendis necessitatibus possimus, nam deserunt exercitationem nostrum suscipit unde. Error atque officia nam est laborum quaerat quidem sed quam eligendi facere nostrum, tenetur natus aut saepe molestias tempore expedita suscipit.",
            'price':'150.000'
        },
        'couple':{
            'title':'Cabana para Pareja',
            'img': [img1,img4,img5,img6,img7],
            'description': ['Capacidad: 3', "Pisos: 2", 'Camas: 3'],
            'information': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam eligendi voluptatibus eveniet earum? Tempora omnis ratione at ut vero perferendis necessitatibus possimus, nam deserunt exercitationem nostrum suscipit unde. Error atque officia nam est laborum quaerat quidem sed quam eligendi facere nostrum, tenetur natus aut saepe molestias tempore expedita suscipit.",
            'price':'130.000'
        }
    }

    return chalets;
};

export default bd;