// IMPORTO LAS DEPENDENCIAS
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


// Conexion DB
const initDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    useNewUrlParser: true;
    useUnifiedTopology: true;

    // const { name, host } = DB.connection;
    // console.log(`Connected to ${name} at ${host}`);

    console.log('DB conectada')
  } catch (err) {
    console.log(err)
  }
}

export { initDatabase };