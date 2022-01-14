const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const userRoutes = require('././routes/userRoutes.js')
const appointmentRoutes = require('./routes/appointmentRoutes.js')
const app = express()

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
    res.send("hello there")
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(bodyParser.json());


app.use('/api', api);
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
  });

app.listen(PORT, console.log(`'Server running in ${process.env.NODE_ENV} mode on port ${5000}'`))