import apiClient from "../../config/axios";

const customGoogleSearch = (keywords: string[]) => {
  const response = apiClient.get("/api/google-search", {
    params: { keywords },
  });
  return response;
};

const customYoutubeSearch = (query: string) => {
  const response = apiClient.get("/api/youtube-search", {
    params: { query },
  });
  return response;
};

const customNYTimesBooks = () => {
  const response = apiClient.get("/api/nytimes-books");
  return response;
};

const customNYTimesTopStories = (section: string) => {
  const response = apiClient.get("/api/nytimes-top-stories", {
    params: { section },
  });
  return response;
};

const customScrapper = (url: string) => {
  const response = apiClient.get("/api/scrapper", {
    params: { url },
  });
  return response;
};

export {
  customGoogleSearch,
  customYoutubeSearch,
  customNYTimesBooks,
  customNYTimesTopStories,
  customScrapper,
};
