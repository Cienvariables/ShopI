import router from 'express'
import Provider from '../models/Provider.js'
import signJwt from '../utils/jwtHelpers.js'
import errorHandler from '../utils/errorHandler.js'
// import { hashPassword, comparePassword } from '../utils/passwordHelpers.js'

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const foundProvider = await Provider.findOne({ email })
    const isValidPassword = foundProvider.password === password

    if (!foundProvider || !isValidPassword) {
      return res.status(404).json({ message: 'Invalid credentials' })
    }

    const token = signJwt(foundProvider._id)

    res.status(200).json({ message: 'Provider logged in successfully', token })
  } catch (err) {
    errorHandler(err, res)
  }
})

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  try {
    const newProvider = new Provider({ name, email, password, isDeleted: false })

    await newProvider.save()

    // HTTP 201 -> Recurso creado
    res.status(201).json({ message: 'Provider saved successfully', provider: newProvider })
  } catch (err) {
    errorHandler(err, res)
  }
})

export { router as providerRouter }