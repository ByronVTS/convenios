document.addEventListener("DOMContentLoaded", function() {
  var btnEvaluar = document.querySelector(".btn-evaluar");
  var btnCopiar = document.querySelector(".btn-copiar");

  btnEvaluar.addEventListener("click", function() {
    var valorVisita = document.getElementById("valor_visita").value;
    var mesesDiferidos = document.getElementById("meses_diferidos").value;
    var fechaFacturacion = document.getElementById("fecha_facturacion").value;
    var respuestaTexto = document.getElementById("respuesta__texto");
    var tipoSoporte = document.getElementById("tipo_soporte").value;

    // Función para obtener la fecha actual formateada
    function obtenerFecha() {
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
    obtenerFecha();

    // Función para obtener el nombre del mes a partir de su índice
    function obtenerMes(mesActual, sumaMes) {
      var valorASumar = parseFloat(sumaMes);
      var nuevoMes = parseFloat(mesActual);
      var totalMes = valorASumar + nuevoMes;
      var nombres_meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ];
      return totalMes = nombres_meses[totalMes];
    }

    // Sección para elección de fechas de pago
    var diaFacturacion, rangoPago, diaCorteServicio;
    if (fechaFacturacion === "fecha 1") {
      diaFacturacion = "PRIMERO de cada mes";
      rangoPago = "1 al 5";
      diaCorteServicio = 6;
    } else if (fechaFacturacion === "fecha 15") {
      diaFacturacion = "QUINCE de cada mes";
      rangoPago = "15 al 20";
      diaCorteServicio = 21;
    } else {
      console.error("No se ha escogido FECHA DE FACTURACION");
    }

    var convenio = "";
    if (valorVisita === "$15" && mesesDiferidos === "2 meses") {
      convenio = `$ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 1)}
$ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 2)}`;
    } else if (valorVisita === "$15" && mesesDiferidos === "3 meses") {
      convenio = `$ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 1)}
$ 5 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 2)}
$ 5 hasta máximo el 5 de ${obtenerMes(mes, 3)}`;
    } else if (valorVisita === "$22" && mesesDiferidos === "2 meses") {
      convenio = `$ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 1)}
$ 12 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 2)}`;
    } else if (valorVisita === "$22" && mesesDiferidos === "3 meses") {
      convenio = `$ 7 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 1)}
$ 7 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 2)}
$ 8 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 3)}`;
    } else if (valorVisita === "$35" && mesesDiferidos === "2 meses") {
      convenio = `$ 15 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 1)}
$ 20 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 2)}`;
    } else if (valorVisita === "$35" && mesesDiferidos === "3 meses") {
      convenio = `$ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 1)}
$ 10 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 2)}
$ 15 hasta máximo el ${diaCorteServicio - 1} de ${obtenerMes(mes, 3)}`;
    } else {
      console.error("No se ha creado la situación");
    }

    respuestaTexto.innerHTML =
      `Ejemplo para convenio de pago por visita técnica ${obtenerFecha()}
Promesa de pago ${tipoSoporte} ${fechaFacturacion} de cada mes 

1.- De contado a los técnicos el momento del soporte el valor de ${valorVisita}
2.- Diferido Estimado cliente, su soporte lo puede pagar de la siguiente manera:
${convenio}

Los pagos los debe hacer con el pago de la factura del servicio de cada mes.
Recuerde que su factura se emite el ${diaFacturacion} y máximo debe pagarla del ${rangoPago} para evitar inconvenientes con la suspensión del servicio ya que el ${diaCorteServicio} ya se estaría cortando el servicio.`;

  });

  btnCopiar.addEventListener("click", function() {
    function copiarTexto() {
      var texto = document.getElementById("respuesta__texto");
      texto.select();
      document.execCommand("copy");
    }
    copiarTexto();
  });
});
