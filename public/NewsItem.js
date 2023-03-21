<div className={styles.newsItem}>
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={urlToImage} alt={title} className={styles.image} />
    <h2 className={styles.heading}>{title}</h2>
    <p className={styles.description}>{description}</p>
  </a>
</div>;
