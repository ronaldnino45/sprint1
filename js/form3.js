function validar_telefono(string){
    if (string.length>6 && string.length<=10 ) {
        for (var i = 0; i< string.length; i++) {
            var caracter = string.charAt(i);
            //console.log("el caracter es ", caracter);
            if( caracter == "@" || caracter == "!" || caracter == "_" || caracter == "-") {
               //console.log("Caracter no permitido");
                return false;
             }  
       } 
       //console.log("La salida es correcta", string); 
       return true;          
    }else{
       // console.log("El usuario debe estar entre 6 y 10 caracteres");
        return false; 
    }
}

function validar_direccion(string){
    if (string.length>6 && string.length<=30 ) {
            if( string.includes ("#")) {
                if( (string.includes("Carrera " || "Transversal " || "Circular " || "Calle " )) && (string.indexOf("Carrera " || "Transversal " || "Circular " || "Calle ") == 0)){
                    //console.log("Dirección correcta");
                    //console.log(string.indexOf("Carrera"));
                    return true
                    
                }else{
                    //console.log("Dirección debe empezar por Carrera, Calle, Circular o Trasversal")
                    return false
                }

             }  
             //console.log("no tiene el caracter #");
             return false;             
    }else{
        //console.log("El usuario debe estar entre 7 y 30 caracteres");
        return false; 
    }
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;
//var nombre = prompt("Introduzca su nombre");
//validar_telefono("012345678_");
//validar_direccion("Carrera 10 #");


