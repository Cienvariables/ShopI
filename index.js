//REQUERIMOS LAS DEPENDENCIAS // Falta: import cors from "cors"; si levanto frontal y helmet
import express from 'express';
import logger from "morgan";
import dotenv from 'dotenv';
dotenv.config()
import cors from "cors";

import { initDatabase } from './src/database/connection.js'// Conexion DB
initDatabase()
import { providerRoutes } from './src/routes/provider.routes.js';

// import {createProvider, authenticate, logout} from './controllers/provider.controller.js';
// import { isAuth } from './src/authentication/jwt.js';

const app = express()// Iniciado el objeto de aplicacion
const router = express.Router()
app.use(logger('dev'));

//Prueba
router.get('/', (req, res) => {
  res.send('Hello world')
})

// Middelwares - Headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200'],
  credentials: true,
}));

// Middlewares JSON y JWT
app.set("secretKey", "nodeRestApi"); // JWT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  // app.use(providerMiddleware)

app.use(logger("dev")); //Morgan


// Middlewares, Public routes
app.use('/provider', providerRoutes);

// Middlewares, Protected routes

//isAuth, logout);
// Gestion de errores 404
app.use('*', (req, res, next) => { // TODO, uyuyuyuy Si no encuentra la ruta que machea
  const error = new Error('Route not found')
  error.status = 404
  next(error)
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error')
})

// Levanto el servidor
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port: ${process.env.PORT}`)
})

// export { app };