function validar_telefono(cadena){
    if (cadena.length>6 && cadena.length<=10 ) {
        for (var i = 0; i< cadena.length; i++) {
            var caracter = cadena.charAt(i);
            //console.log("el caracter es ", caracter);
            if( caracter == "@" || caracter == "!" || caracter == "_" || caracter == "-") {
               console.log("Caracter no permitido");
                return false;
             }  
       } 
       console.log("La salida es correcta", cadena); 
       return true;          
    }else{
        console.log("El usuario debe estar entre 6 y 10 caracteres");
        return false; 
    }
}

function validar_direccion(cadena){
    if (cadena.length>6 && cadena.length<=30 ) {
            if( cadena.includes ("#")) {
                if( (cadena.includes("Carrera " || "Transversal " || "Circular " || "Calle " )) && (cadena.indexOf("Carrera " || "Transversal " || "Circular " || "Calle ") == 0)){
                    console.log("Dirección correcta");
                    console.log(cadena.indexOf("Carrera"));
                    return true
                    
                }else{
                    console.log("Dirección debe empezar por Carrera, Calle, Circular o Trasversal")
                    return false
                }

             }  
             console.log("no tiene el caracter #");
             return false;             
    }else{
        console.log("El usuario debe estar entre 7 y 30 caracteres");
        return false; 
    }
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion
//var nombre = prompt("Introduzca su nombre");
validar_telefono("012345678_");
//validar_direccion("Carrera 10 #");


