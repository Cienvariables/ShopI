import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Esquema de peliculas
const moviesSchema = new Schema(
  {
    title: String,
    director: String,
    year: Number,
    genre: String
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('Pelicula', moviesSchema);

export { Movie };
