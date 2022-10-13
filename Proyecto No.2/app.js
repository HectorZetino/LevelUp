//Segundo Proyecto de Piscina

valueColor = (btnValue) => {///Metodo para la evaluacion del contador y pintar valores del color que se desea
    if(btnValue > 0){
        document.getElementById("number").style.color = 'green';
    }
    else if(btnValue == 0){
        document.getElementById("number").style.color = 'orange';
    }
    else{
        document.getElementById("number").style.color = 'red';
    }
}
incCounter = () => { //metodo de incremento del contador
    btnValue = parseInt(document.getElementById("number").innerHTML) + 1;
    valueColor(btnValue);
    document.getElementById("number").innerHTML =   btnValue;
    return;
}
decCounter = () => {//metodo de decremento del contador
    btnValue = parseInt(document.getElementById("number").innerHTML) - 1;
    valueColor(btnValue);
    document.getElementById("number").innerHTML = btnValue ;
    return;
}
resetCounter = () => { //metodo de reinicio del contador
    btnValue = 0;
    valueColor(btnValue);
    document.getElementById("number").innerHTML = btnValue;
    return;
}
