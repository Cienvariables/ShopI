import express from 'express';
const router = express.Router();
// import jwt from 'jsonwebtoken';
// import { isAuth } from '../authentication/jwt.js';
import { Provider } from '../models/Providers.js';

router.post('/register', async (req, res, next) => {
  try {
    const { body } = req;
    const previusProvider = await Provider.findOne({ email: body.email });
    if (!previusProvider) {
      const error = {
        status: 401,
        message: 'The email is already in use',
      }
      return next(error);
    } else {
      const provider = new Provider(body);
      await provider.save();
      res.status(201).json({
        message: 'Provider created',
        provider,
      });
    }
  } catch (error) {
    next(error);
  }
});


router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error al listar los proveedores',
    });
  }
});

export { router as providerRoutes };











//logOut

// router.post('/logout', async (req, res, next) => {
//   try {
//     req.authority = null;
//     return res.json({
//       status: 200,
//       message: 'Logout successfully',
//       token: null
//     });
//   } catch (error) {
//     next(error);
//   }
// });






//LogIn
// router.post('/login', async (req, res, next) => {
//   try {
//     const { body } = req;
//     const provider = await Provider.findOne({ email: body.email });
//     const isValidPassword = await bcrypt.compare(body.passport, provider?.passport ?? '');
//     if (!provider || !isValidPassword) {
//       const error = {
//         status: 401,
//         message: 'The email or password is incorrect',
//       }       
//       return next(error);
  



    //Token
//     const token = jwt.sign(
//       {
//         id: provider._id,
//         email: provider.email
//       },
//       req.app.get("secretKey"),//en este punto como segundo parametro se configura si se utiliza clave privada o publica
//       { expiresIn: "1h" } // Determinamos el tiempo de expiración
//     );

//     //Respuesta
//     return res.json({
//       status: 200,
//       message: 'Login successfully',
//       data: {
//         providerId: provider._id,
//         token: token,
//       }
//     });

//   } catch (error) {
//     return next(error);
//   }
// });


//Listado
// router.get('/', [isAuth], async (req, res, next) => {
//   try {
//     const providers = await Provider.find();
//     res.json(providers);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Error al listar los proveedores',
//     });
//   }
// });


