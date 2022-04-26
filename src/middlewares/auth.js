// import { verifyJwt } from '../utils/jwtHelpers.js'

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers['authorization']

//   if (!authHeader) {
//     return res.status(401).json({ message: 'Not auth token found' })
//   }

//   const [_, token] = authHeader.split(' ')

//   const decodedData = verifyJwt(token)

//   if (!decodedData) {
//     return res.status(401).json({ message: 'Invalid auth token found' })
//   }

//   req.providerId = decodedData.providerId
//   next()
// }

// export { authMiddleware as providerMiddleware }