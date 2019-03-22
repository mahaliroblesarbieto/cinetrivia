const nombrejs= document.getElementById("nombre");
function comenzar(){
  document.getElementById("saludo").innerHTML= "¡Hola " + nombrejs.value + "!";
  document.getElementById("introduccion").style.display="none";
  document.getElementById("eleccion").style.display="block";
}
function pDrama() {
  document.getElementById("eleccion").style.display="none";
  document.getElementById("drama").style.display="block";
}
function pRomance() {
  document.getElementById("eleccion").style.display="none";
  document.getElementById("romance").style.display="block";
}

function finalizar_drama(){
	/* claves correctas de DRAMA */
	const clave1D="A";
	const clave2D="A";
	const clave3D="B";
	/* fin de respuestas DRAMA*/

	const correctojs="Respuesta correcta";
	const incorrectojs="Respuesta incorrecta";

	/* Obteniendo valores de respuestas de trivia DRAMA*/
	/* pregunta 1*/
  let clavemarcada1D;
  let lista1 = document.getElementsByName('lista1D');
	for(let i=0;i<lista1.length;i++){
     if(lista1[i].type=='radio' && lista1[i].checked){
       clavemarcada1D=lista1[i].value;
	  break;
	  }
	}
	
	/* pregunta 2*/
  let clavemarcada2D;
  let lista2 = document.getElementsByName('lista2D');
	for(let i=0;i<lista2.length;i++){
     if(lista2[i].type=='radio' && lista2[i].checked){
       clavemarcada2D=lista2[i].value;
	  break;
	  }
	}
	
	/* pregunta 3*/
  let clavemarcada3D;
  let lista3 = document.getElementsByName('lista3D');
	for(let i=0;i<lista3.length;i++){
     if(lista3[i].type=='radio' && lista3[i].checked){
       clavemarcada3D=lista3[i].value;
	  break;
	  }
	}
	

	/* Comparando claves correctas con claves marcadas por el usuario*/
	if(clave1D==clavemarcada1D){
		document.getElementById("correcto1D").style.display="block";
		document.getElementById("correcto1D").innerHTML=correctojs;
	}else {
		document.getElementById("incorrecto1D").style.display="block";
		document.getElementById("incorrecto1D").innerHTML=incorrectojs+". <br/>* La respuesta correcta es "+clave1D;
	}
	
	if(clave2D==clavemarcada2D){
		document.getElementById("correcto2D").style.display="block";
		document.getElementById("correcto2D").innerHTML=correctojs;
	}else {
		document.getElementById("incorrecto2D").style.display="block";
		document.getElementById("incorrecto2D").innerHTML=incorrectojs+". <br/>* La respuesta correcta es "+clave2D;
	}
	
	if(clave3D==clavemarcada3D){
		document.getElementById("correcto3D").style.display="block";
		document.getElementById("correcto3D").innerHTML=correctojs;
	}else {
		document.getElementById("incorrecto3D").style.display="block";
		document.getElementById("incorrecto3D").innerHTML=incorrectojs+". <br/>* La respuesta correcta es "+clave3D;
	}
	
	document.getElementById("finalizar_drama").style.display="none";
    document.getElementById("volver_drama").style.display="block";
	
}


function finalizar_romance(){
	/* claves correctas de ROMANCE */
	const clave1R="C";
	const clave2R="B";
	const clave3R="C";
	/* fin de respuestas ROMANCE*/

	const correctojs="Respuesta correcta";
	const incorrectojs="Respuesta incorrecta";

	/* Obteniendo valores de respuestas de trivia ROMANCE*/
	/* pregunta 1*/
  let clavemarcada1R;
  let lista1 = document.getElementsByName('lista1R');
	for(let i=0;i<lista1.length;i++){
     if(lista1[i].type=='radio' && lista1[i].checked){
       clavemarcada1R=lista1[i].value;
	  break;
	  }
	}
	
	/* pregunta 2*/
  let clavemarcada2R;
  let lista2 = document.getElementsByName('lista2R');
	for(let i=0;i<lista2.length;i++){
     if(lista2[i].type=='radio' && lista2[i].checked){
       clavemarcada2R=lista2[i].value;
	  break;
	  }
	}
	
	/* pregunta 3*/
  let clavemarcada3R;
  let lista3 = document.getElementsByName('lista3R');
	for(let i=0;i<lista3.length;i++){
     if(lista3[i].type=='radio' && lista3[i].checked){
       clavemarcada3R=lista3[i].value;
	  break;
	  }
	}
	

	/* Comparando claves correctas con claves marcadas por el usuario*/
	if(clave1R==clavemarcada1R){
		document.getElementById("correcto1R").style.display="block";
		document.getElementById("correcto1R").innerHTML=correctojs;
	}else {
		document.getElementById("incorrecto1R").style.display="block";
		document.getElementById("incorrecto1R").innerHTML=incorrectojs+". <br/>* La respuesta correcta es "+clave1R;
	}
	
	if(clave2R==clavemarcada2R){
		document.getElementById("correcto2R").style.display="block";
		document.getElementById("correcto2R").innerHTML=correctojs;
	}else {
		document.getElementById("incorrecto2R").style.display="block";
		document.getElementById("incorrecto2R").innerHTML=incorrectojs+". <br/>* La respuesta correcta es "+clave2R;
	}
	
	if(clave3R==clavemarcada3R){
		document.getElementById("correcto3R").style.display="block";
		document.getElementById("correcto3R").innerHTML=correctojs;
	}else {
		document.getElementById("incorrecto3R").style.display="block";
		document.getElementById("incorrecto3R").innerHTML=incorrectojs+". <br/>* La respuesta correcta es "+clave3R;
	}
	
	document.getElementById("finalizar_romance").style.display="none";
    document.getElementById("volver_romance").style.display="block";	
}