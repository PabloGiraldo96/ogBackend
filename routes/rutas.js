import express from 'express'

import {ControladorFlor} from '../controllers/ControladorFlor.js'
import {ControladorDestilado} from '../controllers/ControladorDestilado.js'
import {ControladorComestible} from '../controllers/ControladorComestible.js'
import {ControladorProducto} from '../controllers/ControladorProducto.js'
import { ControladorExtraccion } from '../controllers/ControladorExtraccion.js'

//Dividir rutas de la lógica de negocio, método express.Router

let controladorFlor = new ControladorFlor()

let controladorDestilado = new ControladorDestilado()

let controladorComestible = new ControladorComestible()

let controladorProducto = new ControladorProducto()

let controladorExtraccion = new ControladorExtraccion()

export let rutas = express.Router()

// Flores

rutas.post('/registrarflor', controladorFlor.registrandoFlor)

rutas.get('/buscarflores', controladorFlor.buscandoFlores)

rutas.get('/buscarflor/:idflor', controladorFlor.buscandoFlor)

rutas.put('/editarflor/:idflor', controladorFlor.editandoFlor)	

//rutas.delete('/borrarflor/idflor', function  {
//res.send('Borrando flor')
//})

// Destilados

rutas.post('/registrardestilado', controladorDestilado.registrandoDestilado)

rutas.get('/buscardestilados', controladorDestilado.buscandoDestilados)

rutas.get('/buscardestilado/:iddestilado', controladorDestilado.buscandoDestilado)

rutas.put('/editardestilado/:iddestilado', controladorDestilado.editandoDestilado)
//
//rutas.delete('/borrardestilado/iddestilado', function  {
//res.send('Borrando destilado')
//})

// Comestibles

rutas.post('/registrarcomestible', controladorComestible.registrandoComestible)

rutas.get('/buscarcomestibles', controladorComestible.buscandoComestibles)

rutas.get('/buscarcomestible/:idcomestible', controladorComestible.buscandoComestible)

rutas.put('/editarcomestible/:idcomestible', controladorComestible.editandoComestible)
//
//rutas.delete('/borrarcomestible/idcomestible', function  {
//res.send('Borrando comestible')
//})

// Productos

rutas.post('/registrarproducto', controladorProducto.registrandoProducto)

rutas.get('/buscarproductos', controladorProducto.buscandoProductos)

rutas.get('/buscarproducto/:idproducto', controladorProducto.buscandoProducto)

rutas.put('/editarproducto/:idproducto', controladorProducto.editandoProducto)
//
//rutas.delete('/borrarproducto', function  {
//res.send('Borrando producto')
//})

// Extracciones

rutas.post('/registrarextraccion', controladorExtraccion.registrandoExtraccion )

rutas.get('/buscarextracciones', controladorExtraccion.buscandoExtracciones)

rutas.get('/buscarextraccion/:idextraccion', controladorExtraccion.buscandoExtraccion)

rutas.put('/editarextraccion/:idextraccion', controladorExtraccion.editandoExtraccion)
//
//rutas.delete('/borrarextraccion', function  {
//res.send('Borrando producto')
//})
