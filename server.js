// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

app.use(express.json());

// Define a route to fetch restaurant data from Swiggy API
app.get("/api/swiggy-restaurants", async (req, res) => {
  try {
    const swiggyResponse = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = swiggyResponse.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch restaurant data from Swiggy API" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
