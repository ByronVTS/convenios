document.addEventListener("DOMContentLoaded", function() {
    var btnCopiar = document.querySelector(".btn-copiar");
    var btnEvauar = document.querySelector(".btn-evaluar-suspendidos");

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

    btnEvauar.addEventListener("click", function(){
        var fechaFacturaSelect = document.getElementById("fecha_factura")
        var valorMensualSelect = document.getElementById("valor_mensual")
        var fechaFacturacionSelect = document.getElementById("fecha_facturacion")
        var numeroDiasConsumoInput = document.getElementById("numero_dias_por_consumir")
        var numeroDiasConsumidosInput = document.getElementById("numero_dias_consumidos")
        var respuestaTextoArea = document.getElementById("respuesta__texto");


        var fechaFactura = fechaFacturaSelect.value;
        var valorMensual = parseFloat(valorMensualSelect.value);
        var fechaFacturacion = fechaFacturacionSelect.value;
        var numeroDiasConsumo = numeroDiasConsumoInput.value;
        var numeroDiasConsumidos = numeroDiasConsumidosInput.value;
        var respuestaTexto = respuestaTextoArea;
        var fecha_actual = new Date()
        var dia = fecha_actual.getDate();
        console.log(dia);

    if(fechaFacturacion == "fecha 15"){
        var fechaFacturacionResultado = ("FECHA DE FACTURACION 15 DE CADA MES")
        if(dia < 5){
        var diaMaximoDePago = parseFloat(5)
        }else{
        var diaMaximoDePago = parseFloat(14)
        }
    }else if (fechaFacturacion == "fecha 1"){
        var fechaFacturacionResultado = ("FECHA DE FACTURACION 1 DE CADA MES")
        var diaMaximoDePago = parseFloat(20)
        if(dia < 19){
          var diaMaximoDePago = parseFloat(20)
        }else{
          var diaMaximoDePago = parseFloat(30)
        }
    }else{
        console.error("No se ha seleccionado fecha de facturacion");
    }
    var valorProporcionalMensual = parseFloat(calcularValor(valorMensual,numeroDiasConsumo))
    var valorTotalPendiente = parseFloat(valorMensual + valorProporcionalMensual)
    var mitadvalorTotalPendiente = parseFloat(valorTotalPendiente / 2)
    var valorProporcionalFactura = parseFloat(calcularValor(valorMensual,numeroDiasConsumidos))
    var valoresProporcionalesTotales = (valorProporcionalFactura + valorProporcionalMensual)



    respuestaTexto.innerHTML =
    `PROMOCIÓN PARA REACTIVACIÓN ${fechaFacturacionResultado}:

    Estimado cliente al momento su saldo se desglosa de la siguiente manera:
    Pago pendiente de: ${fechaFactura} $ ${valorMensual},00
    Proporcional para consumo de éste mes: $ ${valorProporcionalMensual},00
    Dando UN TOTAL de $ ${valorTotalPendiente},00
                 
    Para que se pueda reactivar lo podemos
    DIFERIR de la siguiente manera:
    50% $ ${mitadvalorTotalPendiente},00 en éste momento y 50% $ ${mitadvalorTotalPendiente},00 hasta el día ${diaMaximoDePago} de este mes
    
    O DE CONTADO (proporcionales) con descuento solo por hoy debe pagar el valor en éste momento $ ${valoresProporcionalesTotales},00 dólares
     es para no olvidarme ----Valor pendiente proporcional del ${fechaFactura} $ ${valorProporcionalFactura},00

                 
    Si no cancela el día de hoy el valor con descuento, quedarán pendiente el saldo indicado sin descuento.        
    `

    
    // funcion para obtener el valor proporcional del mes con el minimo de $10
    function calcularValor(valorMensual, numeroDiasConsumo) {
  let resultado = (valorMensual / 30) * numeroDiasConsumo;
  if (resultado < 10) {
    resultado = 10;
  } else {
    resultado = Math.ceil(resultado);
  }
  return resultado;
}


    });
});