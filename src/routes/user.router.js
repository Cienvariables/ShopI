import express from 'express';
import passport from 'passport';

const userRoutes = express.Router();

userRoutes.post('/register', (req, res, next) => {
  // Invocamos a la autenticación de Passport

  const done = (error, user) => {
    // Si hay un error, llamamos a nuestro controlador de errores
    if (error) {
      return next(error);
    }

    req.logIn(user, (error) => {
      // Si hay un error logeando al usuario, resolvemos el controlador
      if (error) {
        return next(error);
      }
      // Si no hay error, devolvemos al usuario logueado
      return res.status(201).json(user)
    });

  };

  passport.authenticate('register', done)(req); // ¡No te olvides de invocarlo aquí!
});


export { userRoutes };
