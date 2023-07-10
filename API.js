import express from 'express'
import cors from 'cors'
import { rutas } from './routes/rutas.js'
import {generarConexion} from './database/conexion.js'


export class API{
	constructor(){
	this.app = express() // app == express
	this.conectarBD()
	this.enrutarPeticiones()
	}

	despertarServidor(){ 
	this.app.listen(3000, ()=>console.log("Servidor Encendido.."))
	}

	enrutarPeticiones(){
	this.app.use(cors())
	this.app.use(express.json())
	this.app.use('/', rutas)
	}

	conectarBD(){
	generarConexion()
	}

}