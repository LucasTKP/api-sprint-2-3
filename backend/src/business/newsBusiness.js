import RSSParser from "rss-parser";
import { save } from "../repositories/repository.js";

export const register = async () => {
  const feedUrl = "https://www.noticiasaominuto.com.br/rss/ultima-hora";
  const feed = await new RSSParser().parseURL(feedUrl);

  const feedData = feed.items.map((item) => {
    return {
      title: item.title,
      description: item.contentSnippet,
      createdAt: item.pubDate,
      image: item.enclosure?.url,
      link: item.link,
    };
  });

  const jsonContent = JSON.stringify(feedData, null, 2);

  const file = {
    Bucket: "projeto-api-2-3-minuto-api-lucas",
    Key: "feedData.json",
    Body: jsonContent,
    ContentType: "application/json",
  };

  const response =  await save(file);
  if(response.$metadata.httpStatusCode == 200) {
    return {
      statusCode: 200,
      data: feedData
    }
  } else {
    return response
  }
};