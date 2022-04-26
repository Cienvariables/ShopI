// import express from 'express';
// import { Cinema } from '../models/Preserves.js';
// import { Movie } from '../models/Beverages.js';

// const router = express.Router();
// // Crear los métodos GET, POST, PUT y DELETE de la colección Cinema.

// // get with populate
// router.get('/', async (req, res, next) => {
//   try {
//     const cinemas = await Cinema.find().populate('movies');
//     return res.status(200).json(cinemas);
//   } catch (error) {
//     return next(error);
//   }
// });

// // post
// router.post('/create', async (req, res, next) => {
//   try {
//     const newCinema = new Cinema({
//       name: req.body.name,
//       location: req.body.location,
//       movies: []
//     });
//     const createdCinema = await newCinema.save();
//     return res.status(201).json(createdCinema);
//   } catch (error) {
//     next(error);
//   }
// });


// // put
// router.put('/add-movies', async (req, res, next) => {
//   try {
//     const { locationId, moviesId } = req.body;
//     const updatedLocation = await Cinema.findByIdAndUpdate(
//       locationId,
//       { $push: { movies: moviesId } },
//       { new: true }
//     );
//     return res.status(200).json(updatedLocation);
//   } catch (error) {
//     return next(error);
//   }
// });


// // delete
// router.delete('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deletedCinema = await Cinema.findByIdAndDelete(id);
//     return res.status(200).json(deletedCinema);
//   } catch (error) {
//     return next(error);
//   }
// });

// export { router as locationRoutes }
