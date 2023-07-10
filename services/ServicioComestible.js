import { modeloComestible } from "../models/modeloComestible.js"

export class ServicioComestibles{

	constructor(){}


	async registrarComestible(datosComestible){
		let comestibleaRegistrar = new modeloComestible(datosComestible)
		return await comestibleaRegistrar.save()
}

	async buscarTodosComestibles(){

	let comestiblesConsultados = await modeloComestible.find()
	return comestiblesConsultados
}

	async buscarComestible(idComestible){

	let comestibleConsultado = await modeloComestible.findById(idComestible)
	return comestibleConsultado
}

	async editarComestible(idComestible, datosComestible){

	return await modeloComestible.findByIdAndUpdate(idComestible, datosComestible)
}
}