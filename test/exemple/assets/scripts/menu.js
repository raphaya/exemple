var uneValeur = 1000;

function action(){
    console.log("5 sec après", uneValeur);
}

console.log("avant");

setTimeout(action, 3000);
uneValeur = 20000;

console.log("avant");