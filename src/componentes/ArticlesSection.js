// src/components/ArticlesSection.js
import React from 'react';
import ArticleCard from './ArticleCard';

const articles = [
  { id: 1, image: '', title: 'Artículo 1', excerpt: 'Resumen del artículo 1...', url: '/articulos/articulo-1.js'} ,
  { id: 2, image: '', title: 'Artículo 2', excerpt: 'Resumen del artículo 2...', url:'/articulos/articulo-2.js'},
  { id: 3, image: '', title: 'Artículo 3', excerpt: 'Resumen del artículo 3...' },
  { id: 4, image: '', title: 'Artículo 4', excerpt: 'Resumen del artículo 4...' },
  { id: 5, image: '', title: 'Artículo 5', excerpt: 'Resumen del artículo 5...' },
  { id: 6, image: '', title: 'Artículo 6', excerpt: 'Resumen del artículo 6...' },
];

const ArticlesSection = () => {
  return (
    
    <div style={styles.container}>
        

      {articles.map(article => (
        <ArticleCard 
          key={article.id}
          image={article.image}
          title={article.title}
          excerpt={article.excerpt}
          url={article.url}
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
