import mongoose from "mongoose";

export async function generarConexion(){
		try {await mongoose.connect(process.env.DATABASE)
		console.log("Exito conectandonos a BD") 
	} catch(error){
		console.log("Fallo en conexion a BD" + error) 
	 }

}