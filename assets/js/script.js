//RADIOLOGIA ARRAY
var radiologia = [
  {
    hora: "11:00",
    especialista: "Ignacio Shulz",
    paciente: "Francisca Rojas",
    rut: "9878782-1",
    prevision: "Fonasa",
  },
  {
    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-3",
    prevision: "Isapre",
  },
  {
    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445345-3",
    prevision: "Isapre",
  },
  {
    hora: "15:30",
    especialista: "Ana Maria Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "Fonasa",
  },
  {
    hora: "16:00",
    especialista: "Patricia Suazo",
    paciente: "Ramon Ulloa",
    rut: "14989389-k",
    prevision: "Fonasa",
  },
];
//TRAUMATOLOGIA ARRAY
var traumatologia = [
  {
    hora: "08:00",
    especialista: "Maria Paz Alturraza",
    paciente: "Paula Sanchez",
    rut: "15554774-5",
    prevision: "Fonasa",
  },
  {
    hora: "10: 00",
    especialista: "Raul Araya",
    paciente: "Angelica Navas",
    rut: "15444147-9",
    prevision: "Isapre",
  },
  {
    hora: "10:30",
    especialista: "Maria Arriagada",
    paciente: "Ana Klapp",
    rut: "17879423-9",
    prevision: "Isapre",
  },
  {
    hora: "11:00",
    especialista: "Alejandro Badilla",
    paciente: "Felipe Mardones",
    rut: "1547423-6",
    prevision: "Isapre",
  },
  {
    hora: "11:30",
    especialista: "Cecilia Budnik",
    paciente: "Diego Marre",
    rut: "16554741-k",
    prevision: "Fonasa",
  },
  {
    hora: "12:00",
    especialista: "Arturo Cavagnaro",
    paciente: "Cecilia Mendez",
    rut: "9747535-8",
    prevision: "Isapre",
  },
  {
    hora: "12:30",
    especialista: "Andres Kanacri",
    paciente: "Marcial Suazo",
    rut: "11254785-5",
    prevision: "Isapre",
  },
];

//DENTAL ARRAY
var dental = [
  {
    hora: "08:30",
    especialista: "Andrea Zuñiga",
    paciente: "Marcela Retamal",
    rut: "11123425-6",
    prevision: "Isapre",
  },
  {
    hora: "11: 00",
    especialista: "Maria Pia Zañartu",
    paciente: "Angel Muñoz",
    rut: "9878789-2",
    prevision: "Isapre",
  },
  {
    hora: "11:30",
    especialista: "Scarlett Witting",
    paciente: "Mario Kast",
    rut: "7998789-5",
    prevision: "Fonasa",
  },
  {
    hora: "13:00",
    especialista: "Francisco Von Teuber",
    paciente: "Karin Fernandez",
    rut: "18887662-k",
    prevision: "Fonasa",
  },
  {
    hora: "13:30",
    especialista: "Eduardo Viñuela",
    paciente: "Hugo Sanchez",
    rut: "17665461-4",
    prevision: "Fonasa",
  },
  {
    hora: "14:00",
    especialista: "Raquel Villaseca",
    paciente: "Ana Sepulveda",
    rut: "14441281-0",
    prevision: "Isapre",
  },
];
//EJERCICIO 1
//Agregar las siguientes horas al arreglo de Traumatología//Utilizar método push para agregar objetos al final del arreglo de objetos.
traumatologia.push(
  {
    hora: "9:00",
    especialista: "René Poblete",
    paciente: "Ana Gellona",
    rut: "13123329-7",
    prevision: "Isapre",
  },
  {
    hora: "9:30",
    especialista: "María Solar",
    paciente: "Ramiro Andrade",
    rut: "12221451-K",
    prevision: "Fonasa",
  },
  {
    hora: "10:00",
    especialista: "Raul Loyola",
    paciente: "Carmen Isla",
    rut: "10112348-3",
    prevision: "Isapre",
  },
  {
    hora: "10:30",
    especialista: "Antonio Larenas",
    paciente: "Pablo Loayza",
    rut: "13453234-1",
    prevision: "Isapre",
  },
  {
    hora: "12:00",
    especialista: "Matias Aravena",
    paciente: "Susana Poblete",
    rut: "14345656-6",
    prevision: "Fonasa",
  }
);

//EJERCICIO 2
//Eliminar el primer y último elemento del arreglo de Radiología.
//Eliminar un objeto al comienzo del arreglo con el método shift
//Eliminar un objeto al final del arreglo con el método pop
radiologia.pop();
radiologia.shift();

//EJERCICIO 3
/*Imprimir en la página HTML, mediante document.write y/o la funciones que estime conveniente, 
la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada
dato desp
legado y cada fila de información debe estar separada por un párrafo. Ejemplo:
8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE
11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE...*/


for (let datos of traumatologia) {
  document.getElementById("tablaTrauma").innerHTML += `
    <tr class="text-capitalize">
        <td>${datos.hora}</td>
        <td>${datos.especialista}</td>
        <td class="text-capitalize">${datos.paciente}</td>
        <td>${datos.rut}</td>
        <td>${datos.prevision}</td>
    </tr>`;
}

for (let datos of dental) {
  document.getElementById("tablaDental").innerHTML += `
    <tr>
        <td>${datos.hora}</td>
        <td>${datos.especialista}</td>
        <td>${datos.paciente}</td>
        <td>${datos.rut}</td>
        <td>${datos.prevision}</td>
    </tr>`;


    for (let datos of radiologia) {
      document.getElementById("tablaRadio").innerHTML += `
        <tr>
            <td>${datos.hora}</td>
            <td>${datos.especialista}</td>
            <td>${datos.paciente}</td>
            <td>${datos.rut}</td>
            <td>${datos.prevision}</td>
        </tr>`;
    }


  document.getElementById("filas-dental").innerHTML += `
 <p class="list-group-item list-group-item-info text-center">${Object.values(
   datos
 ).join(" - ")} </p>
    `;
}


//EJERCICIO 4
//Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. 
//Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo. Ejemplo: FRANCISCA ROJAS
//Utilizo el método concat para unir los arreglos de radiología junto a traumatología y dental.
//Luego, método map aplicar función a cada elemento para crear así, nuevo array.
radiologia.concat(traumatologia, dental).map((paciente) => {
  document.getElementById("listas-pacientes").innerHTML += `
    <p class="list-group-item list-group-item-info text-center">${paciente.paciente} </p>
       `;
});

//EJERCICIO 6
//Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.
//Ejemplo: PAULA SÁNCHEZ – FONASA
traumatologia.filter((previsionFonasa) => {
  if (previsionFonasa.prevision == "Fonasa") {
    document.getElementById("listas-trauma").innerHTML += `
        <p class="list-group-item list-group-item-info text-center">${previsionFonasa.paciente} - ${previsionFonasa.prevision} </p>
           `;
  }
});


//EJERCICIO 5
//Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental.
//Ejemplo: MARCELA RETAMAL - ISAPRE
dental.filter((previsionIsapre) => {
  if (previsionIsapre.prevision == "Isapre") {
    document.getElementById("listas-dental").innerHTML += `
          <p class="list-group-item list-group-item-info text-center">${previsionIsapre.paciente} - ${previsionIsapre.prevision} </p>
             `;
  }
});


//Imprimir primera y última atencion para cada especialidad, indicando el nombre del paciente y la prevision.
document.getElementById("infoRadio").innerHTML = `Primera atención: ${
  radiologia[0].paciente
} - ${radiologia[0].prevision} | Última atención: ${
  radiologia[radiologia.length - 1].paciente
} - ${radiologia[radiologia.length - 1].prevision}`;

document.getElementById("infoTrauma").innerHTML = `Primera atención: ${
  traumatologia[0].paciente
} - ${traumatologia[0].prevision} | Última atención: ${
  traumatologia[traumatologia.length - 1].paciente
} - ${traumatologia[traumatologia.length - 1].prevision}`;

document.getElementById("infoDental").innerHTML = `Primera atención: ${
  dental[0].paciente
} - ${dental[0].prevision} | Última atención: ${
  dental[dental.length - 1].paciente
} - ${dental[dental.length - 1].prevision}`;
