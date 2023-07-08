  document.addEventListener("DOMContentLoaded", function() {
    var btnEvaluar = document.querySelector(".btn-evaluar-visitas");
    var btnCopiar = document.querySelector(".btn-copiar");
  
    btnEvaluar.addEventListener("click", function() {
      var valorVisitaSelect = document.getElementById("valor_visita");
      var mesesDiferidosSelect = document.getElementById("meses_diferidos");
      var fechaFacturacionSelect = document.getElementById("fecha_facturacion");
      var respuestaTextoArea = document.getElementById("respuesta__texto");
      var tipoSoporteSelect = document.getElementById("tipo_soporte")
  
      var valorVisita = valorVisitaSelect.value;
      var mesesDiferidos = mesesDiferidosSelect.value;
      var fechaFacturacion = fechaFacturacionSelect.value;
      var respuestaTexto = respuestaTextoArea;
      var tipoSoporte = tipoSoporteSelect.value;
      
      
      function obtenerFecha(){
      var fecha_actual = new Date();
      var dia = fecha_actual.getDate();
      var mes = fecha_actual.getMonth(); // Los meses en JavaScript se indexan desde 0
      var anio = fecha_actual.getFullYear();
      var nombres_meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ];
      mes = nombres_meses[mes];
      
      // Formateo del mes y día a dos dígitos si es necesario
      mes = mes < 10 ? "0" + mes : mes;
      dia = dia < 10 ? "0" + dia : dia;
      return fecha_formateada = dia + "/" + mes + "/" + anio;
      }
      var fecha_actual = new Date();
      var mes = fecha_actual.getMonth(); // Los meses en JavaScript se indexan desde 0

      function obtenerMes(mesActual, sumaMes){
         var valorASumar = parseFloat(sumaMes)
         var nuevoMes = parseFloat(mesActual)
         var totalMes = valorASumar + nuevoMes
         var nombres_meses = [
          "enero", "febrero", "marzo", "abril", "mayo", "junio",
          "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];
        return totalMes = nombres_meses[totalMes]
      }

      obtenerFecha()

      // seccion para eleccion de fechas de pago
       if (fechaFacturacion == "FECHA 1"){
        var diaFacturacion = "PRIMERO DE CADA MES "
        var rangoPago = "1 al 5"
        var diaCorteServicio = 6
        if(valorVisita === "$15" && mesesDiferidos === "2 meses"){
          var convenio = (` 
  $ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} 
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)}`) 
      }else if(valorVisita === "$15" && mesesDiferidos === "3 meses"){
          var convenio = (`
  $ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} 
  $ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)} 
  $ 5 hasta máximo el 5 de ${obtenerMes(mes,3)}`) 
      }else if (valorVisita === "$22" && mesesDiferidos === "2 meses") {
          var convenio = (` 
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} 
  $ 12 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)} `) 
      }else if(valorVisita === `$22` && mesesDiferidos === `3 meses`) {
        var convenio = (` 
  $ 7 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)}
  $ 7 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)} 
  $ 8 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,3)} `) 
      }else if ( valorVisita === `$35` && mesesDiferidos === `2 meses`){
          var convenio = (`  
  $ 15 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} 
  $ 20 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)} `) 
      }else if(valorVisita === `$35` && mesesDiferidos === `3 meses`){
          var convenio = (`  
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} 
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)} 
  $ 15 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,3)} `) 
      }else{ 
        console.error("No se ha creado la situacion")
      }
      }else if(fechaFacturacion == "FECHA 15"){
        var diaFacturacion = "QUINCE DE CADA MES"
        var rangoPago = "15 al 20"
        var diaCorteServicio = 21
        if(valorVisita === "$15" && mesesDiferidos === "2 meses"){
          var convenio = (` 
  $ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,0)}  
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)}`) 
      }else if(valorVisita === "$15" && mesesDiferidos === "3 meses"){
          var convenio = (` 
  $ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,0)}  
  $ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)}  
  $ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)}`) 
      }else if (valorVisita === "$22" && mesesDiferidos === "2 meses") {
          var convenio = (`  
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,0)}  
  $ 12 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} `) 
      }else if(valorVisita === `$22` && mesesDiferidos === `3 meses`) {
        var convenio = (`  
  $ 7 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,0)}  
  $ 7 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} 
  $ 8 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)} `) 
      }else if ( valorVisita === `$35` && mesesDiferidos === `2 meses`){
          var convenio = (`  
  $ 15 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,0)}  
  $ 20 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)} `) 
      }else if(valorVisita === `$35` && mesesDiferidos === `3 meses`){
          var convenio = (`  
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,0)}  
  $ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,1)}  
  $ 15 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes,2)} `) 
      }else{ 
        console.error("No se ha creado la situacion")
      }
       }else{
          console.error("No se ha escogido FECHA DE FACTURACION ")
       }

       //Ejemplo para convenio de pago por visita tecnica ${obtenerFecha()}

        respuestaTexto.innerHTML =
`PROMESA DE PAGO POR ${tipoSoporte} ${fechaFacturacion} DE CADA MES 

1.- DE CONTADO a los técnicos el momento del traslado/reubicacion/soporte el valor de ${valorVisita}
2.- DIFERIDO Estimado cliente su traslado/reubicacion/soporte lo puede pagar de la siguiente manera:
  ${convenio}

Los pagos los debe hacer con el pago de la factura del servicio de cada mes.
Recuerde que su factura se emite el ${diaFacturacion} y máximo debe pagarla del ${rangoPago} para evitar inconvenientes con la suspensión del servicio ya que el ${diaCorteServicio} ya se estaría cortando el serivicio.`;


        

    });

    btnCopiar.addEventListener("click", function() {
      function copiarTexto() {
        // Obtener el elemento de entrada de texto o el elemento específico que deseas copiar
        var texto = document.getElementById("respuesta__texto");
        // Seleccionar el contenido del elemento de entrada de texto o del elemento específico
        texto.select()
        // Copiar el contenido seleccionado al portapapeles
        document.execCommand("copy");
    }
    copiarTexto()

  });

  });
