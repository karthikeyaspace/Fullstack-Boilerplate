import cheerio from "cheerio";
import axios from "axios";

const getScrapingData = async (url: string) => {
  try {
    axios.get(url).then((res) => {
      const $ = cheerio.load(res.data);
      const title = $("title").text();
      const links: string[] = [];
      $('.title a[href^="http"], a[href^="https"]')
        .slice(1)
        .each((index, element) => {
          links.push($(element).text());
        });

      return { title, links };
    });
  } catch (error) {
    console.error(error);
  }
};

export { getScrapingData };
