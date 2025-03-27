require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("this is home");
});

app.get("/movies/:id", async (req, res) => {
  const params = req.params || 1;
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_original_language=te&page=${params.id}&sort_by=release_date.desc`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.VITE_APP_MOVIE_ACCESS_KEY}`,
        Accept: "application/json",
      },
    });
    const response = await data.json();

    res.send(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
app.get("/search/movie/:query/:id", async (req, res) => {
  const params = req.params;
  console.log(params);
  const url = `https://api.themoviedb.org/3/search/movie?query=${params.query}&page=${params.id}`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.VITE_APP_MOVIE_ACCESS_KEY}`,
        Accept: "application/json",
      },
    });
    const response = await data.json();

    res.send(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
app.get("/search/tv/:query/:id", async (req, res) => {
  const params = req.params;
  console.log(params);
  const url = `https://api.themoviedb.org/3/search/tv?query=${params.query}&page=${params.id}`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.VITE_APP_MOVIE_ACCESS_KEY}`,
        Accept: "application/json",
      },
    });
    const response = await data.json();

    res.send(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
app.get("/webseries/:id", async (req, res) => {
  const params = req.params;
  console.log(params);
  const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&with_original_language=te&page=${params.id}&sort_by=release_date.desc`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.VITE_APP_MOVIE_ACCESS_KEY}`,
        Accept: "application/json",
      },
    });
    const response = await data.json();

    res.send(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
app.get("/horror/:id", async (req, res) => {
  const params = req.params;
  console.log(params);
  const url = `https://api.themoviedb.org/3/discover/movie?&with_genres=27&page=${params.id}`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.VITE_APP_MOVIE_ACCESS_KEY}`,
        Accept: "application/json",
      },
    });
    const response = await data.json();

    res.send(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
app.get("/anime/:id", async (req, res) => {
  const params = req.params;
  console.log(params);
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=16&sort_by=popularity.desc&page=${params.id}`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.VITE_APP_MOVIE_ACCESS_KEY}`,
        Accept: "application/json",
      },
    });
    const response = await data.json();

    res.send(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
