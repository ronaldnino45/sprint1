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