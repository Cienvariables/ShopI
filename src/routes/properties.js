
import express from 'express';
import { Movie } from '../models/Movies.js';
import { errorHandler } from '../utils/errorHandler.js';
// Me carge la linea de doteev
const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    const locations = await Location.find().populate('characters');
    return res.status(200).json(locations)
  } catch (error) {
    return next(error)
  }
});

// Crear una nueva pelicula
router.post('/', async (req, res) => {
  const { title, director, year, genre } = req.body

  try {
    const newMovie = new Movie(
      {
        title,
        director,
        year,
        genre
      })

    await newMovie.save()

    res.json({ message: 'Movie saved successfully', movie: newMovie })

  } catch (err) {
    errorHandler(err, res)
  }
})

// Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010
router.get('/year/:year', async (err, req, res, next) => {
  const { year } = req.params;

  try {
    const moviesByYear = await Movie.find({ year: { $gte: year } });
    if (moviesByYear.length > 0) {
      return res.status(200).json({ moviesByYear })
    } else {
      return res.stutus(404).json(`No years found: ${year}`)
    }
  } catch (err) {
    errorHandler(err, res, next)
  }
});

// put
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, director, year, genre } = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          director,
          year,
          genre
        }
      },
      { new: true }
    );
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
});

// delete
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    return res.status(200).json(deletedMovie);
  } catch (error) {
    return next(error);
  }
});

export { router as propertiesRoutes }


// -Usando (**$gt**) mayores de
// - Si usamos **$lt (less than)** encontraremos valores menores al que usemos.
// - Si usamos **$lte (less than equal)** encontraremos valores menores o igual al usado.
// - Si usamos **$gt (greater than)** encontraremos los valores mayores al usado.
// - Si usamos **$gte (greater than equal)** encontraremos los valores mayores e iguales al usado.