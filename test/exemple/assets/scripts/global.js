"use strict"
var url = "http://www.google.fr";

var unNom = function(){
    console.log("fonction anonyme");
};

function maFonction(){
    console.log("fonction nommée")
};

unNom();
maFonction();

var url = undefined;

var c =[];