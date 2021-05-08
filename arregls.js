
const arr = [2, 1, 2, 5, 6, 4, 2, 7, 7, 8, 8, 8]
const arrr = [2, 1, 5, 8, 6, 4, 7]
const valores = [{ 2: "si", 3: "no", 4: "si", 8: "si" }]
const valoress = { 1: "1", 2: "2", 3: "2", 4: "3" }
var ra = []
const datos = [
  {
    "id_prod": 23,
    "nomb_prod": "Mayonesa Hellmans",
    "tipo_prod": "otros",
    "precio_unit": 5,
    "precio_dist": 4,
    "fecha_reg": "2014-11-11T05:00:00.000Z"
  },
  {
    "id_prod": 24,
    "nomb_prod": "Gaseosa KR",
    "tipo_prod": "otros",
    "precio_unit": 5,
    "precio_dist": 4,
    "fecha_reg": "2014-09-30T05:00:00.000Z"
  }
]
for (var i in datos) {
  // ra.push(datos[i].precio_unit)
}
datos.forEach(function (numero) {
  ra.push(numero.precio_unit)

});
console.log(ra)
var repetidoss = {};
var repetidos = {};

arr.forEach(function (numero) {
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});
function borraItemValor(array, valor) {
  for (var i in array) {
    if (array[i] == valor) {
      array.splice(i, 1);
    }
  }
}

var values = [];
function cambiarValor(valorABuscar, valorViejo, valorNuevo) {
  valores.forEach(function (elemento) {
    elemento[valorABuscar] = elemento[valorABuscar] == valorViejo ? valorNuevo : elemento[valorABuscar]
  })
}
for (var k in repetidos) {
  if (repetidos[k] == 3) {
    values.push(k)
    borraItemValor(arrr, k)
    cambiarValor(k, "si", "no")
  }
}





console.log(valores)
console.info(values);
console.log(arrr)

