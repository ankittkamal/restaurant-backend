// Import packages
const express = require("express");
const restaurant = require("./routes/restaurant");
const cors = require("cors");

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/restaurant", restaurant);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
