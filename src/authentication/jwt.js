
import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {

  const authorization = req.headers.authorization //si en el header existe authorization lo guardamos en una variable. 
  //Esta tiene el formato: bearer token

  if (!authorization) { //Se comprueba que exista autorización
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
      data: null
    });
  }

  const splits = authorization.split(" ")//troceamos el token en dos partesy quitamos Bearer
  if (splits.length != 2 || splits[0] != "Bearer") { //
    return res.status(400).json({
      status: 400,
      message: "Bad Request",
      data: null
    })
  }

  const jwtString = splits[1]; // Contiene la parte con información del token

  try {
    var token = jwt.verify(jwtString, req.app.get("secretKey")); //verificamos que el token tiene una firma correcta
  } catch (err) {
    return next(err);
  }

  const authority = { //Creamos un objeto authority que contienen la informacion del token, en este caso el id y el name del usuario
    id: token.id,
    email: token.email
  };
  //Asignamos al request el objeto authority
  req.authority = authority;
  next();
}

export { isAuth }
