import * as dotenv from 'dotenv'
import {API} from './API.js'

dotenv.config()
console.log(process.env.PORT)

let servidor = new API()

// Despertar el servidor

servidor.despertarServidor()