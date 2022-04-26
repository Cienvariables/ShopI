// IMPORTO LAS DEPENDENCIAS
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


// Conexion DB
const initDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)

    console.log('DB conectada')
  } catch (err) {
    console.log(err)
  }
}

export { initDatabase };