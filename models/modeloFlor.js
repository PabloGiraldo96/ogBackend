import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Flor = new Schema({
	
	nombre:{
		type: String,
		required: true
	}, 
	foto:{
		type: [String],
		required: true
	}, 
	descripcion:{ 
		type: String,
		required: true
	}, 
	precio:{
		type: Number,
		required: false
	}
})

export const modeloFlor = mongoose.model('flor', Flor)