
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

//cuenta los valores que se repeten 
arr.forEach(function (numero) {
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});
//borra el iten que se pasa en valos
function borraItemValor(array, valor) {
  for (var i in array) {
    if (array[i] == valor) {
      array.splice(i, 1);
    }
  }
}


//busco el valor de un indice de un arreglo 
function cambiarValor(valorABuscar, valorViejo, valorNuevo) {
  valores.forEach(function (elemento) {
    elemento[valorABuscar] = elemento[valorABuscar] == valorViejo ? valorNuevo : elemento[valorABuscar]
  })
}
// recore el objeto repetidos busca la condicion y lo ingres a arregl
var values = [];
for (var k in repetidos) {
  if (repetidos[k] == 3) {
    values.push(k)
        //borra del arreglo el indice =3 
    borraItemValor(arrr, k)
     // pasa el indices = 3 y valor vejo y valor nuevo
    cambiarValor(k, "si", "no")
  }
}
console.log(valores)
console.info(values);
console.log(arrr)
var hidden;
$("#date1").flatpickr({
  enableTime: false,
  dateFormat: "Y-m-d",
  "disable": [
    function (date) {
      return (date.getDay() === 0 || date.getDay() === 6);  // disable weekends
    }
  ],
  locale: {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    },
    months: {
      shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
      longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    },
  },
});
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
function myFunction() {
  var x = document.getElementById("date1");
  let date = new Date(x.value);

  hidden = dias[date.getDay()];
  console.log(hidden);
  return true;
}


