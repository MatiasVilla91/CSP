// src/components/ArticleCard.js
import React from 'react';

const ArticleCard = ({ image, title, excerpt, url }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.excerpt}>{excerpt}</p>
      <a href={url} style={styles.button} target="_blank" rel="noopener noreferrer">Leer Artículo</a>
    </div>
  );
};

const styles = {
  card: {
    border: '5px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    margin: '16px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.5em',
    margin: '16px 0',
  },
  excerpt: {
    fontSize: '1em',
    color: '#666',
  },
  button: {
    marginTop: '16px',
    padding: '8px 16px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  }
};

export default ArticleCard;

