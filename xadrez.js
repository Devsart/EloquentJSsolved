
    var linha = "";
    var linha2 = "";
    var size = 9;
    var matriz = "";
    for(var i=0;i<size;i++){
       if(i%2==0){
                linha+="#";
        }
        else
                linha+="-";
            
    };
    for(var j=0;j<size;j++){
        if(j%2==0){
            linha2+="-";
    }
    else
            linha2+="#";
        
};
    for(var k=0;k<size;k++){
        if(k%2==0){
            matriz+=linha+"\n";
}
    else
            matriz+=linha2+"\n";
    
    };  

    console.log(matriz)