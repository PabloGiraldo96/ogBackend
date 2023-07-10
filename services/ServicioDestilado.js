import { modeloDestilado } from "../models/modelodestilado.js"

export class ServicioDestilados{

	constructor(){}


	async registrarDestilado(datosDestilado){

	let destiladoaRegistrar = new modeloDestilado(datosDestilado)
	console.log(destiladoaRegistrar)
	return await destiladoaRegistrar.save()
	}

	async buscarTodosDestilados(){

	let destiladosConsultados = await modeloDestilado.find()
	return destiladosConsultados
	}

	async buscarDestilado(idDestilado){

	let destiladoConsultado = await modeloDestilado.findById(idDestilado)
	return destiladoConsultado
	}

	async editarDestilado(idDestilado, datosDestilado){

	return await modeloDestilado.findByIdAndUpdate(idDestilado, datosDestilado)
	}
}