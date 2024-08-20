// api.route.ts

import * as apis from "../api";
import express from "express";
import expressAsyncHandler from "express-async-handler";

const api = express.Router();

// apis = { googel search, youtube search, nytimes books, nytimes top stories, websraping}

api.get(
  "/google-search",
  expressAsyncHandler(async (req, res) => {
    const { keywords } = req.body;
    const response = await apis.getGoogleSearchSources(keywords);
    res.send(response);
  })
);

api.get(
  "/youtube-search",    
  expressAsyncHandler(async (req, res) => {
    const { query } = req.body;
    const response = await apis.getYTSources(query);
    res.send(response);
  })
);

api.get(
  "/nytimes-books",
  expressAsyncHandler(async (req, res) => {
    const response = await apis.getNYTimesBooks();
    res.send(response);
  })
);

api.get(
  "/nytimes-top-stories",
  expressAsyncHandler(async (req, res) => {
    const { section } = req.body;
    const response = await apis.getNYTimesTopStories(section);
    res.send(response);
  })
);

api.get(
  "/scrapper",
  expressAsyncHandler(async (req, res) => {
    const { url } = req.body;
    const response = await apis.getScrapingData(url);
    res.send(response);
  })
);

export default api;
