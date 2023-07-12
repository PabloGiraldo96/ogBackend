import res from 'express/lib/response.js'
import {ServicioExtracciones } from '../services/ServicioExtraccion.js'

export class ControladorExtraccion{

constructor(){}

async registrandoExtraccion(peticion, respuesta){

let datosExtraccion = peticion.body

let servicioExtraccion = new ServicioExtracciones()

console.log(datosExtraccion)

try{
	await servicioExtraccion.registrarExtraccion(datosExtraccion)
	respuesta.status(200).json({
	"mensaje": "Exito agregando la extraccion"
})
} catch(errorPeticion){
	respuesta.status(400).json({
	"mensaje": "Fallamos agregando los datos " + errorPeticion
	})}
}

async buscandoExtraccion(peticion, respuesta){

let idExtraccion = peticion.params.idExtraccion

let servicioExtraccion = new ServicioExtracciones()

try{

respuesta.status(200).json({
		"mensaje": "Exito buscando la extraccion" + idExtraccion,
		"extraccion": await servicioExtraccion.buscarExtraccion(idExtraccion)
	})
}
catch(errorPeticion){ 
        respuesta.status(400).json({
        "mensaje":"Fallamos "+ errorPeticion
        })
	}
}

async buscandoExtracciones(peticion, respuesta){

let servicioExtraccion = new ServicioExtracciones()

try{

respuesta.status(200).json({
		"mensaje": "Exito buscando las extracciones",
		"extraccion": await servicioExtraccion.buscarExtracciones()
	})
}
catch(errorPeticion){ 
        respuesta.status(400).json({
        "mensaje":"Fallamos "+ errorPeticion
        })
	}
}

async editandoExtraccion(peticion, respuesta){

let idExtraccion = peticion.params.idExtraccion

let datosExtraccion = peticion.body

let servicioExtraccion = new ServicioExtracciones()

try{

await servicioExtraccion.editarExtraccion(idExtraccion, datosExtraccion)
respuesta.status(200).json({
"mensaje": "Exito editando las extracciones" 
})
} catch(errorPeticion){ 
  respuesta.status(400).json({
  "mensaje":"Fallamos "+ errorPeticion
  			})
		}
	}
}