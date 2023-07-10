import { ServicioProductos } from "../services/ServicioProducto.js"

export class ControladorProducto{

constructor(){}

async registrandoProducto(peticion, respuesta){

let datosProducto = peticion.body

let servicioProducto = new ServicioProductos()

try{
await servicioProducto.registrarProducto(datosProducto)
respuesta.status(200).json({
	"mensaje": "Exito agregando el producto"
	})} 
catch(errorPeticion){
	respuesta.status(400).json({
	"mensaje": "Fallamos agregando el producto " + errorPeticion
	})}

}

async buscandoProducto(peticion, respuesta){

let idProducto = peticion.params.idproducto

let servicioProducto = new ServicioProductos()

try { 
	respuesta.status(200).json({
	"mensaje": "Exito buscando el producto" + idProducto,
	"Producto": await servicioProducto.buscarProducto(idProducto)
})} 
catch(errorPeticion){ 
    respuesta.status(400).json({
	"mensaje":"Fallamos "+ errorPeticion
    })}

}

async buscandoProductos(peticion, respuesta){

let servicioProducto = new ServicioProductos()

try { 
	respuesta.status(200).json({
	"mensaje": "Exito buscando los productos",
	"Productos": await servicioProducto.buscarTodosProductos()
	})}
catch(errorPeticion){ 
	respuesta.status(400).json({
    "mensaje":"Fallamos "+ errorPeticion
    })}
}

async editandoProducto(peticion, respuesta){

let idProducto = peticion.params.idproducto

let datosProducto = peticion.body

let servicioProducto = new ServicioProductos()

try { 
await servicioProducto.editarProducto(idProducto, datosProducto)
respuesta.status(200).json({
	"mensaje": "Exito editando el producto" 
})}
catch(errorPeticion){ 
	respuesta.status(400).json({
    "mensaje":"Fallamos "+ errorPeticion
    })}
	}

}