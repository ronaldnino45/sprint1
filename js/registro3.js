function buscarDominio(arreglo){


}

function retornarCuenta(args){


}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }


/*
function capturar() {
    var telefono = document.getElementById("campoTelefono").value;
    //var direccion = document.getElementById("campoDireccion").value;
 //   var registros = [];
//  registros.push(telefono);
//    registros.push(direccion);
    
    console.log(telefono);
  //console.table(registros);
   // sleep(10000);
   
} 
} 
*/
var capturar = function(){
    var name = document.getElementById("campoTelefono").value;
    var age = document.getElementById("campoDireccion").value;
    console.log(" El nombre ingresado es" + name + " edad" + age);
}

var mostrar = function(){
    document.write(registros)
}
    //console.log(telefono, direccion);

module.exports.buscarDominio = buscarDominio();
module.exports.retornarCuenta = retornarCuenta();
