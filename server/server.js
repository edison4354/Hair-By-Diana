const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const userRoutes = require('././routes/userRoutes.js')
const appointmentRoutes = require('./routes/appointmentRoutes.js')
const app = express()

dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.send("hello there")
})

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(PORT, console.log(`'Server running in ${process.env.NODE_ENV} mode on port ${5000}'`))