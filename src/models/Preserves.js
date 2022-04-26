// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;

// // Esquema de Cinema
// const cinemaSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     location: { type: String, required: true },
//     movies: [{
//       type: mongoose.Schema.Types.ObjectId, //Array: relacion colecciones, Se vincula por ID
//       ref: 'Pelicula'
//     }],
//   },
//   {
//     // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
//     timestamps: true,
//   }
// );

// const Cinema = mongoose.model('Cinema', cinemaSchema); // mongoose.model(nombreque le doy), y variable donde guardo el Shema

// export { Cinema };
