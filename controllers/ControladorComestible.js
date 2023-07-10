import { ServicioComestibles } from "../services/ServicioComestible.js"

export class ControladorComestible{

constructor(){}

async registrandoComestible(peticion, respuesta){

let datosComestible = peticion.body

let servicioComestible = new ServicioComestibles()

try{
await servicioComestible.registrarComestible(datosComestible)
respuesta.status(200).json({
	"mensaje": "Exito agregando el comestible"
	})} 
catch(errorPeticion){
	respuesta.status(400).json({
	"mensaje": "Fallamos agregando los datos" + errorPeticion
	})}
}

async buscandoComestible(peticion, respuesta){

let idComestible = peticion.params.idcomestible

let servicioComestible = new ServicioComestibles()

try{
	 respuesta.status(200).json({
	"mensaje": "Exito buscando el comestible" + idComestible,
	"Comestible": await servicioComestible.buscarComestible(idComestible)
	})} 
catch(errorPeticion){
	respuesta.status(400).json({
	"mensaje": "Fallamos agregando los datos" + errorPeticion
	})}
}

async buscandoComestibles(peticion, respuesta){

let servicioComestible = new ServicioComestibles()

try { 
	respuesta.status(200).json({
	"mensaje": "Exito buscando los comestibles",
	"Comestible": await servicioComestible.buscarTodosComestibles()	
	})}
catch(errorPeticion){ 
   respuesta.status(400).json({
   "mensaje":"Fallamos "+ errorPeticion
   })}
}

async editandoComestible(peticion, respuesta){


let idComestible = peticion.params.idcomestible

let datosComestible = peticion.body

let servicioComestible = new ServicioComestibles()
	
try { 
await servicioComestible.editarComestible(idComestible, datosComestible)
respuesta.status(200).json({
	"mensaje": "Exito editando el comestible" 
	})}
catch(errorPeticion){ 
    respuesta.status(400).json({
	"mensaje":"Fallamos "+ errorPeticion
    })}
}
}