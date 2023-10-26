// Import packages
const express = require("express");
const restaurant = require("./routes/restaurant");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/restaurant", restaurant);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
