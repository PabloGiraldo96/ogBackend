import {modeloExtraccion} from "../models/modeloExtraccion.js"

export class ServicioExtracciones{

constructor(){}

async registrarExtraccion(datosExtraccion){

let extraccionaRegistrar = new modeloExtraccion(datosExtraccion)
console.log(extraccionaRegistrar)
return await extraccionaRegistrar.save()
}

async buscarExtracciones(){

let extraccionesConsultadas = await modeloExtraccion.find()
return extraccionesConsultadas
}

async buscarExtraccion(idExtraccion){

let extraccionConsultada = await modeloExtraccion.findById(idExtraccion)
return extraccionConsultada
}

async editarExtraccion(idExtraccion, datosExtraccion){

return await modeloExtraccion.findByIdAndUpdate(idExtraccion, datosExtraccion)
}
}