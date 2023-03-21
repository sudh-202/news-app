import axios from "axios";

const API_KEY = "fef6c6d0547145afa70c55bb25bb362f";

export async function getNews(category) {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fef6c6d0547145afa70c55bb25bb362f`
    // `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=fef6c6d0547145afa70c55bb25bb362f`
  );
  return response.data.articles;
}
