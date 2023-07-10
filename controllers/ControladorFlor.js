import {ServicioFlores} from '../services/ServicioFlor.js'

export class ControladorFlor{

	constructor(){}

	async registrandoFlor(peticion, respuesta){

	let datosFlor = peticion.body

	let servicioFlor = new ServicioFlores()

	console.log(datosFlor)

	try{
	await servicioFlor.registrarFlor(datosFlor)
	respuesta.status(200).json({
		"mensaje": "Exito agregando la flor"
		})
	} 
	catch(errorPeticion){
		respuesta.status(400).json({
		"mensaje": "Fallamos agregando los datos " + errorPeticion
		})}

	}

	async buscandoFlor(peticion, respuesta){

	let idFlor = peticion.params.idflor

	let servicioFlor = new ServicioFlores()
  
	try { 
		respuesta.status(200).json({
		"mensaje": "Exito buscando la flor" + idFlor,
		"flor": await servicioFlor.buscarFlor(idFlor)
	})

	} catch(errorPeticion){ 
        respuesta.status(400).json({
        "mensaje":"Fallamos "+ errorPeticion
            })
		}
	}

	async buscandoFlores(peticion, respuesta){

	let servicioFlor = new ServicioFlores()

	try { 
		respuesta.status(200).json({
		"mensaje": "Exito buscando las flores",
		"flores": await servicioFlor.buscarTodas()
	})

	}
	catch(errorPeticion){ 
        respuesta.status(400).json({
        "mensaje":"Fallamos "+ errorPeticion
            })
		}
	}

	async editandoFlor(peticion, respuesta){

	let idFlor = peticion.params.idflor

	let datosFlor = peticion.body

	let servicioFlor = new ServicioFlores()

	try { 
		await servicioFlor.editarFlor(idFlor, datosFlor)
		respuesta.status(200).json({
		"mensaje": "Exito editando las flores" 
		})
	}
	catch(errorPeticion){ 
        respuesta.status(400).json({
        "mensaje":"Fallamos "+ errorPeticion
            })
		}
	}
}