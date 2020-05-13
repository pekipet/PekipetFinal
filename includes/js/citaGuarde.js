window.onload = function () {
  //document.primero.nombre.readOnly = true;
  //document.primero.apellidos.readOnly = true;
  //document.primero.fecha.readOnly = true;
  document.primero.precio.readOnly = true;
  //document.primero.onsubmit = enviar;
};

if (document.addEventListener) {
  window.addEventListener("load", iniciar);
} else if (document.attachEvent) {
  window.attachEvent("onload", iniciar);
}

var varSelect1_1 = new Array(
  "Jornada completa mensual",
  "Media jornada mensual",
  "Media jornada"
);
var varSelect1_2 = new Array(
  "1 hora",
  "2 horas",
  "3 horas",
  "4 horas",
  "5 horas"
);

function iniciar() {
  if (document.addEventListener) {
    document.getElementById("form-tiempo").addEventListener("change", citas);
    document.getElementById("formtiempo2").addEventListener("change", precio);
    document.getElementById("form-tiempo").addEventListener("change", precio2);
    document.getElementById("cita").addEventListener("click", enviar);
  } else if (document.attachEvent) {
    document.getElementById("form-tiempo").attachEvent("onchange", citas);
    document.getElementById("formtiempo2").attachEvent("onchange", precio);
    document.getElementById("form-tiempo").attachEvent("onchange", precio2);
    document.getElementById("cita").attachEvent("onclick", enviar);
  }
}

function citas() {
  var valor = document.getElementById("form-tiempo").value;
  if (valor != 0) {
    var varSelect1 = eval("varSelect1_" + valor);
    var vnbSelect1 = varSelect1.length;
    document.primero.formtiempo2.length = vnbSelect1;
    for (i = 0; i < vnbSelect1; i++) {
      document.getElementById("formtiempo2").options[i].text = varSelect1[i];
    }
  } else {
    document.getElementById("formtiempo2").length = 1;
    document.getElementById("formtiempo2").options[0].text = "-";
    document.getElementById("formprecio").value = 0;
  }
  document.getElementById("formtiempo2").options[0].selected = true;
  //Necesario para cambiar el hidden con la carga del combo
  document.getElementById("tipo-servicio").value = varSelect1[0];
}

function precio() {
  var valor = document.getElementById("formtiempo2").value;
  var descuento = parseInt(document.getElementById("descuento").value);
  var valor2 = document.getElementById("form-tiempo").value;
  if (valor == 0 && valor2 == 1) {
    valor = "Jornada completa mensual";
  }
  if (valor == 0 && valor2 == 2) {
    valor = "1 hora";
  }
  switch (valor) {
    case "Jornada completa mensual":
      document.getElementById("formprecio").value =
        300 - 300 * (descuento / 100);
      document.getElementById("anterior").value = 300;
      break;
    case "Media jornada mensual":
      document.getElementById("formprecio").value =
        200 - 200 * (descuento / 100);
      document.getElementById("anterior").value = 200;
      break;
    case "Media jornada":
      document.getElementById("formprecio").value = 16 - 16 * (descuento / 100);
      document.getElementById("anterior").value = 16;
      break;
    case "1 hora":
      document.getElementById("formprecio").value = 6 - 6 * (descuento / 100);
      document.getElementById("anterior").value = 6;
      break;
    case "2 horas":
      document.getElementById("formprecio").value = 8 - 8 * (descuento / 100);
      document.getElementById("anterior").value = 8;
      break;
    case "3 horas":
      document.getElementById("formprecio").value = 10 - 10 * (descuento / 100);
      document.getElementById("anterior").value = 10;
      break;
    case "4 horas":
      document.getElementById("formprecio").value = 12 - 12 * (descuento / 100);
      document.getElementById("anterior").value = 12;
      break;
    case "5 horas":
      document.getElementById("formprecio").value = 14 - 14 * (descuento / 100);
      document.getElementById("anterior").value = 14;
      break;
    /*default:
            document.getElementById('formprecio').value = 0;
          break;*/
  }
}

function precio2() {
  var valor = document.getElementById("form-tiempo").value;
  var descuento = document.getElementById("descuento").value;
  if (valor == 1) {
    document.getElementById("formprecio").value = 300 - 300 * (descuento / 100);
    document.getElementById("anterior").value = 300;
  } else if (valor == 2) {
    document.getElementById("formprecio").value = 6 - 6 * (descuento / 100);
    document.getElementById("anterior").value = 6;
  } else {
    document.getElementById("formprecio").value = 0;
  }
}

function enviar() {
  var vblEnviar = true;

  var vTelefono = document.primero.telefono.value.trim();

  var verTelefono = /^[679]\d{8}$/;

  if (!verTelefono.test(vTelefono)) {
    vblEnviar = false;
    document.primero.telefono.value = "";
    document.primero.telefono.placeholder = "ERROR!";
    document.primero.telefono.focus();
  }
  return vblEnviar;
}
