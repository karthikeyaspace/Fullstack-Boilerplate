import axios from "axios";
import config from "../config/env";

const getNYTimesTopStories = async (section: string) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${config.NYTIMES_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error;
  }
};

const getNYTimesBooks = async () => {
  const url = `http://api.nytimes.com/svc/books/v2/lists?list-name=young-adult&api-key=${config.NYTIMES_API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export { getNYTimesTopStories, getNYTimesBooks };