const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/news/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${city}&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});