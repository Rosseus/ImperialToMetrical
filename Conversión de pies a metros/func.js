let contenedorMetros = document.querySelector(".contenedorMetros");
let input = document.querySelector(".input");
let submit = document.querySelector(".enviar");
let visual = document.querySelector(".resultado");
let limpiar = document.querySelector(".limpiar");

let contenedorPies = document.querySelector(".contenedorPies");
let inputPies = document.querySelector(".input2");
let submitPies = document.querySelector(".enviar2");
let visualPies = document.querySelector(".resultado2");
let limpiarPies = document.querySelector(".limpiar2");

let contenedorPulgadas = document.querySelector(".contenedorPulgadas");
let inputPulgadas = document.querySelector(".input3");
let submitPulgadas = document.querySelector(".enviar3");
let visualPulgadas = document.querySelector(".resultado3");
let limpiarPulgadas = document.querySelector(".limpiar3")

let contenedorCentimetros = document.querySelector(".contenedorCentrimetros");
let inputCentimetros = document.querySelector(".input4");
let submitCentimetros = document.querySelector(".enviar4");
let visualCentimetros = document.querySelector(".resultado4");
let limpiarCentimetros = document.querySelector(".limpiar4");

let limpiezaBoton = document.querySelector(".limpiarTodo");

function cuentaAMetros (){
	let valor = input.value;
	let cuentaPies = 3.28;
	let resultado = valor / cuentaPies;
	visual.innerHTML = resultado.toFixed(2);
};

function cuentaAPies(){
	let valorPies = inputPies.value;
	let cuentaMetros = 3.28;
	let resultadoMetros = valorPies * cuentaMetros;
	visualPies.innerHTML = resultadoMetros.toFixed(2);	
};

function cuentaAPulgadas (){
	let valorPulgadas = inputPulgadas.value;
	let cuentaCentimetros = 2.54;
	let resultadoPulgadas = valorPulgadas / cuentaCentimetros;
	visualPulgadas.innerHTML = resultadoPulgadas.toFixed(2);
};

function cuentaACentimetros(){
	let valorCentimetros = inputCentimetros.value;
	let cuentaPulgadas = 2.54;
	let resultadoCentimetros = valorCentimetros * cuentaPulgadas;
	visualCentimetros.innerHTML = resultadoCentimetros.toFixed(2);	
};

function limpiezaTotal(){
	inputPies.value = ''
	inputCentimetros.value = ''
	inputPulgadas.value = ''
	input.value = ''
	visual.innerHTML = ''
	visualPies.innerHTML = ''
	visualCentimetros.innerHTML = ''
	visualPulgadas.innerHTML = '' 
};


submit.addEventListener("click",()=>cuentaAMetros());
submitPies.addEventListener("click",()=>cuentaAPies());
submitPulgadas.addEventListener("click",()=>cuentaAPulgadas());
submitCentimetros.addEventListener("click",()=>cuentaACentimetros());

limpiezaBoton.addEventListener("click",()=>limpiezaTotal());

limpiar.addEventListener("click",()=>{
	visual.innerHTML = ''
	input.value = ''
	});

limpiarPies.addEventListener("click",()=>{
	visualPies.innerHTML = ''
	inputPies.value = ''
	});

limpiarPulgadas.addEventListener("click",()=>{
	visualPulgadas.innerHTML = ''
	inputPulgadas.value = ''
	});

limpiarCentimetros.addEventListener("click",()=>{
	visualCentimetros.innerHTML = ''
	inputCentimetros.value = ''
	});