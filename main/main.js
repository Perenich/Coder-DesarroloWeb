window.addEventListener("scroll", function(){
	let header = document.querySelector("header"); 
	header.classList.toggle("abajo",window.scrollY>0);
})


 document.getElementById('btnEnviar').onclick = function(){
    alert('Sus datos fueron cargados correctamente, no estaremos contactando con usted, gracias!');
}
 

const servicios = ['Esculpida', 'Esmaltada', 'Kipping']

servicios.push('Art Nail')

servicios.unshift('Esmaltado Sintetico')

for (let i=0; i < servicios.length ; i++){
    console.log('Servicio: '+ servicios[i])
}


console.log(servicios)




