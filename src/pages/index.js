import { useState } from "react";
import Select from "react-select";
import { getNews } from "./api/api.js";
import styles from "./styles.module.css";


const sources = [
  { value: "cnn", label: "CNN" },
  { value: "bbc-news", label: "BBC News" },
  { value: "abc-news", label: "ABC News" },
];

export default function Home() {
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState(null);
  const [articles, setArticles] = useState([]);

  const handleCategoryChange = async (newValue) => {
    setCategory(newValue);
    const newsData = await getNews(newValue, source?.value);
    setArticles(newsData);
  };

  const handleSourceChange = async (newValue) => {
    setSource(newValue);
    const newsData = await getNews(category, newValue?.value);
    setArticles(newsData);
  };



  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>News App</h1>
      <div className={styles.select}>
        <label>Select a category:</label>
        <Select
          options={[
            { value: "general", label: "General" },
            { value: "business", label: "Business" },
            { value: "technology", label: "Technology" },
          ]}
          value={{ value: category, label: category }}
          onChange={(newValue) => handleCategoryChange(newValue.value)}
        />
        <label>Select a source:</label>
        <Select
          options={sources}
          value={source}
          onChange={handleSourceChange}
        />
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
