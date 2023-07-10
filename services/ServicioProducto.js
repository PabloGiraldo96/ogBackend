import { modeloProducto } from "../models/modeloProducto.js"

export class ServicioProductos{

	constructor(){}


	async registrarProducto(datosProducto){
		let productoaRegistrar = new modeloProducto(datosProducto)
		return await productoaRegistrar.save()
}

	async buscarTodosProductos(){

	let ProductosConsultados = await modeloProducto.find()
	return ProductosConsultados
}

	async buscarProducto(idProducto){

	let ProductoConsultado = await modeloProducto.findById(idProducto)
	return ProductoConsultado
}

	async editarProducto(idProducto, datosProducto){

	return await modeloProducto.findByIdAndUpdate(idProducto, datosProducto)
}
}