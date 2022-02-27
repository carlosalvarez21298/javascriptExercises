/*
Este programa devuelve la diferencia simetrica
entre dos o mas arrays.

La diferencia simetrica entre arrays de nuemeros
es crear un array que contenga numeros que no se
repitan entre los arrays dados para realizar la
diferencia.

Ejemplos:

A = {1, 2, 3}
B = {2, 3, 4}
C = {2, 3}

D = A △ B = {1, 4}
E = D △ C = {1, 2, 3, 4}

*/

function simDiff(){
    let simetric=[], aux=[], aux2=[],output=[];
    aux=arguments[0].slice();
    
     for(let i=0;i<arguments.length-1;i++){   
        for(let j=0;j<aux.length;j++){
            if(!(arguments[i+1].includes(aux[j]))){
                simetric.push(aux[j]);
            }    
        }//j
        
        for(let j=0;j<arguments[i+1].length;j++){
            if(!(aux.includes(arguments[i+1][j]))){
                simetric.push(arguments[i+1][j]);
            }    
        }//j
        
        aux=simetric.slice();
        simetric=[];
     }//i
    aux2 = aux.sort(function(a,b){return a-b;});
    
    for(let i=0; i<aux2.length; i++){
        if(aux[i]!=aux[i+1]){
            output.push(aux[i]);
        }
    }
    
    return output;
}//function