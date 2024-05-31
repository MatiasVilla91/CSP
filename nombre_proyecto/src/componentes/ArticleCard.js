// src/components/ArticleCard.js
import React from 'react';

const ArticleCard = ({ image, title, excerpt }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.excerpt}>{excerpt}</p>
      <button style={styles.button}>Leer Artículo</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
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
  }
};

export default ArticleCard;
