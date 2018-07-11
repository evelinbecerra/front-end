'use strict'

//Libreria de colores
const color = require('chalk')
const debug = require('debug')('front-end:demo')

let msg = 'Hola mundo'

console.log(`El mensaje es: ${color.yellow.bold(msg)}`)
debug(`El mensaje es: ${color.yellow.bold(msg)}`)
