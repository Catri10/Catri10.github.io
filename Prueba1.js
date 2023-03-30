//const contenedor = document.getElementById("miContenedor");
//const boton1 = document.getElementById("boton1");
//const boton2 = document.getElementById("boton2");
//const boton3 = document.getElementById("boton3");
//const boton4 = document.getElementById("boton4");

//boton1.addEventListener("click", function() {
//  contenedor.innerHTML = "<p>Soy diseñador web de 34 años, sin experiencia en el rubro. Entusiasta y proactivo, lo que me hace llevar a cabo el aprendizaje por mis propios medios. Me empeño en encontrar las mejores alternativas para la resolución de problemas.</p>";
//});

//boton2.addEventListener("click", function() {
  //contenedor.innerHTML = "<p>Este es el contenido del botón 2.</p>";
//});

//boton3.addEventListener("click", function() {
 //   contenedor.innerHTML = "<p>Este es el contenido del botón 3.</p>";
  //});

//boton4.addEventListener("click", function() {
  //  contenedor.innerHTML = "<p>Este es el contenido del botón 4.</p>";
  //});

// Seleccionar el contenedor
const contenedor = document.querySelector("#miContenedor");

// Seleccionar los botones
const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");

// Agregar un event listener a cada botón
boton1.addEventListener("click", () => {
  contenedor.innerHTML = "<p>Información Personal</p><p>Soy diseñador web de 34 años, sin experiencia en el rubro. Entusiasta y proactivo, lo que me hace llevar a cabo el aprendizaje por mis propios medios. Me empeño en encontrar las mejores alternativas para la resolución de problemas.</p>";
});

boton2.addEventListener("click", () => {
  contenedor.innerHTML = "<p>Datos académicos</p><ul><p>Formación Secundaria Técnica</p><li>E.E.T. N° 21 'General Manuel Belgrano'</li><li>Año de egreso: 2007</li><p>Formación Universitaria incompleta</p><li>Facultad de Ingeniería U.N.N.E.</li><li>2do. Año terminado: 2018</li><p>Inglés Técnico</p><li>E.E.T. N° 21 'General Manuel Belgrano'</li><li>Facultad de Ingeniería U.N.N.E.</li></ul>";
});

boton3.addEventListener("click", () => {
  contenedor.innerHTML = "<p>Experiencia Laboral</p><ul><p>Empresa 1</p><li>Puesto: Becado</li><li>Desde 15/12/2020 hasta 15/12/2022</li><li>Descripción: Este fue mi primer trabajo como Diseñador en el cual estuve a prueba con una beca por el termino de dos meses, en los cuales pude empezar con el fronted además de poder cruzar también los primeros datos del back. Se terminó el período de prueba por eso no pude seguir en la empresa.</li><p>Empresa 2</p><li>Puesto: Diseñador Web</li><li>Desde 10/10/2020 hasta 10/12/2020</li><li>En esta Empresa ya cumplí con más responsabilidades, ocupandome de un Proyecto por el término de 2 años, en los cuales se alcanzaron los objetivos personales y los objetivos esperados por la Empresa.</li></ul>";
});

boton4.addEventListener("click", () => {
  contenedor.innerHTML = "<p>Cursos, Certificados y Proyectos</p><ul><li>Curso Programación desde Cero - EGG (17/08/22)</li><li>Curso Introducción a la Programación - Informatorio Chaco (10/09/22)</li><li>Curso Introducción a la Programación - Código Facilito (19/11/22)</li><li>Curso Profesional de Python - Código Facilito (21/11/22)</li><li>Curso de Programación Básico: 'Nunca he Programado'- Código Facilito (22/11/22)</li><li>Curso de Desarrollo Web - Informatorio Chaco (29/12/22)</li><li>Proyecto: Diseño y desarrollo de sitio web para una ONG de Bomberos voluntarios</li></ul>";
});



