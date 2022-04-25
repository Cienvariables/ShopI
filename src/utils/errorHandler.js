// Esta utilidad permite CAPTURAR el error arrojado por NODE y enviarla por consola y por JSON al desarrollador

const errorHandler = (err, res) => {
  console.log(err)
  res.status(500).json({ error: err.message })
}

export { errorHandler }