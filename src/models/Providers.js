import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const providerSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Provider = mongoose.model('Provider', providerSchema);

export { Provider };





























// business: { type: String, required: true },
    // phoneNumber: { type: Number, required: true },
    // address: { type: String }
    // products: [{
    //   type: mongoose.Schema.Types.ObjectId, //Array: relacion colecciones, Se vincula por ID
    //   ref: 'products'
    // }],