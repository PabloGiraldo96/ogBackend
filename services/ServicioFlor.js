import {modeloFlor} from "../models/modeloflor.js"

export class ServicioFlores{

	constructor(){}

	async registrarFlor(datosFlor){

	let floraRegistrar = new modeloFlor(datosFlor)
	console.log(floraRegistrar)
	return await floraRegistrar.save()
	
}

	async buscarTodas(){

	let floresConsultadas = await modeloFlor.find()
	return floresConsultadas
}

	async buscarFlor(idFlor){

	let florConsultada = await modeloFlor.findById(idFlor)
	return florConsultada
}

	async editarFlor(idFlor, datosFlor){

	return await modeloFlor.findByIdAndUpdate(idFlor, datosFlor)
}
}