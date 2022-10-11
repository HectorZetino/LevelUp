//Primer Proyecto de Piscina
//Se crea el diccionario
var dict = {
   "c" : 3,
   "b" : 2,
   "a" : 1,
};

var keys = Object.keys(dict);
console.log(dict);

keys.sort(); //Se ordenan las llaves 

var keysSorted = [];
var valueSorted = [];

for (i = 0; i < keys.length; i++){
    key = keys[i];
    keysSorted.push({'Key' : key});
    valueSorted.push({'Value': dict[key]});
}

//Imprimo los dos arreglos, (matrices separadas)
console.log(keysSorted);
console.log(valueSorted);