// src/components/ArticlesSection.js
import React from 'react';
import ArticleCard from './ArticleCard';
import articlesData from '../articulos/articulos.json';


const ArticlesSection = () => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <div id="Articulos" style={styles.container}>
      {articles.map(article => (
        <ArticleCard 
          key={article.id}
          image={article.image}
          title={article.title}
          excerpt={article.excerpt}
          id={article.id}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '16px',
   
    
  }
};

export default ArticlesSection;
