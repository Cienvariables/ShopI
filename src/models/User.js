import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Esquema de User

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    //name: { type: String, required: true }, si quisieramos añadir un nombre de usuario
    //lastName: { type: String, required: true }, 
    //phoneNumber:{ type: String, required: true },
    //....
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export { User };
