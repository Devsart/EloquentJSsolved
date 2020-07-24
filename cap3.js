function min(a,b) {
    if(a>=b){
        return b
    }
    else{
        return a
    }
    
};

function IsEven(numero){
    if(numero == 1){
        return numero%2 == 0;
    }
    else if(numero == 0){
        return numero%2 == 0;
    }
    else if(numero < 0){
        return "Negativo é par onde, imbecil?"
    }
    else{
        return IsEven(numero-2)
    }
};

function countBs(string){
    var counter = 0;
    for(i=0;i<string.length;i++){
        if(string.charAt(i)=="B"){
            counter += 1
        }
        else{
            null
        }
    }
    return counter;
}

function countchar(string,char){
    var counter = 0;
    for(i=0;i<string.length;i++){
        if(string.charAt(i)==char){
            counter += 1
        }
        else{
            null
        }
    }
    return counter;
}

