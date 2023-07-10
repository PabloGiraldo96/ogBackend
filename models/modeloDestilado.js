import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Destilado = new Schema({
	
	nombre: {
		type: String,
		required: true
	}, 
	foto: {
		type: [String],
		required: true
	}, 
	descripcion: {
		type: String,
		required: true
	}, 
	precio: {
		type: Number,
		required: false
	}
})

export const modeloDestilado = mongoose.model('destilado', Destilado)