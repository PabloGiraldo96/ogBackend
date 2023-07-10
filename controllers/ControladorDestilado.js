import { ServicioDestilados } from "../services/ServicioDestilado.js"

export class ControladorDestilado{

constructor(){}

async registrandoDestilado(peticion, respuesta){

let datosDestilado = peticion.body

let servicioDestilado = new ServicioDestilados()

try{
	await servicioDestilado.registrarDestilado(datosDestilado)
	respuesta.status(200).json({
	"mensaje": "Exito agregando el destilado"
	})}
catch(errorPeticion){
	respuesta.status(400).json({
	"mensaje": "Fallamos agregando los datos" + errorPeticion
	})}
}

async buscandoDestilado(peticion, respuesta){

let idDestilado = peticion.params.iddestilado

let servicioDestilado = new ServicioDestilados()

try { 
	respuesta.status(200).json({
	"mensaje": "Exito buscando el destilado" + idDestilado,
	"destilado": await servicioDestilado.buscarDestilado(idDestilado)
	})

}
catch(errorPeticion){respuesta.status(400).json({
	"mensaje": "Fallamos buscando los datos" + errorPeticion
	})}
}

async buscandoDestilados(peticion, respuesta){

let servicioDestilado = new ServicioDestilados()

try { 
	respuesta.status(200).json({
	"mensaje": "Exito buscando el destilados",
	"destilado": await servicioDestilado.buscarTodosDestilados()
	})

}
catch(errorPeticion){respuesta.status(400).json({
	"mensaje": "Fallamos buscando los datos, error, " + errorPeticion
	})}

}

async editandoDestilado(peticion, respuesta){

let idDestilado = peticion.params.iddestilado

let datosDestilado = peticion.body

let servicioDestilado = new ServicioDestilados()

try { 
		await servicioDestilado.editarDestilado(idDestilado, datosDestilado)
		respuesta.status(200).json({
		"mensaje": "Exito editando los destilados" 
		})
	}
	catch(errorPeticion){ 
        respuesta.status(400).json({
        "mensaje":"Fallamos editando los destilados, error,  "+ errorPeticion
        })
	}
}

}