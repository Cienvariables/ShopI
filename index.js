
//REQUERIMOS LAS DEPENDENCIAS
import express from 'express'// Import objeto EXPRESS para obtener el objeto de aplicacion
import dotenv from 'dotenv'// la lectura de variables de entorno (.env)
dotenv.config()


// app.disable('x-powered-by'); AlFSeguridad
// npm install --save helmet

import { initDatabase } from './src/database/connection.js'// Conexion DB
initDatabase()

import passport from 'passport';  // Passport
import './src/authentication/passport.js'; // y archivo de configuración


import { userRoutes } from './src/routes/user.router.js';
import { propertiesRoutes } from './src/routes/properties.js';
import { locationRoutes } from './src/routes/location.js';


const app = express()// Iniciado el objeto de aplicacion
const router = express.Router()

// Defino las configuraciones para rutas
// Uso express.json() para que EXPRESS pueda tratar datos en forma JSON
app.use(express.json())
// app.use(express.urlencoded({extended: false})) // Y esto ?? ===> o false

router.get('/', (req, res) => {
  res.send('Hello world')
})

// RUTAS  //Middlewares, cuidado con el orden de las declaraciones
app.use('/properties', propertiesRoutes) //nueva ruta
app.use('/location', locationRoutes)
app.use('/users', userRoutes)
app.use(passport.initialize())

// Gestion de errores 4
app.use('*', (req, res, next) => { // Para cuando no encuentre la ruta que machea
  const error = new Error('Route not found')
  error.status = 404
  next(error)
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error')
})

// server.use(express.json()) //
// server.use(express.urlencoded({extended:true}))

// Levanto el servidor
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port: ${process.env.PORT}`)
})
export { app };


