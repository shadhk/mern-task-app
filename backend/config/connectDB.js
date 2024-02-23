const mongoose = require("mongoose")
const URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(URI)
    console.log(`MongoDB connected`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB

//use this function to server.js to connect db to start server
// const startServer = async () => {
//   try {
//     await connectDB()
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// startServer()
