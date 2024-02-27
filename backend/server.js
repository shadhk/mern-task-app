const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require("./config/connectDB")
const mongoose = require("mongoose")
const cors = require("cors")
const Task = require("./models/taskModel")
const taskRoutes = require("./routes/taskRoute")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use("/api/tasks", taskRoutes)

//Routes
app.get("/", (req, res) => {
  res.send("Home Page")
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => console.log(err))
