import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articulos.json'; // Asegúrate de que la ruta al archivo JSON sea correcta.

function ArticleBody() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Filtrar los datos del artículo basándose en la ID obtenida de la URL.
    // Asegúrate de que los artículos en tu archivo JSON tengan un campo 'id' o cambia este campo por el que utilices.
    const foundArticle = articlesData.find(article => article.id === parseInt(id));
    setArticle(foundArticle);
  }, [id]);

  // Comprobación en caso de que no se encuentre el artículo.
  if (!article) {
    return <div>Artículo no encontrado.</div>;
  }

  return (
    <div>
      {/* Usa un margen directamente en el estilo si es necesario, pero considera usar clases de CSS para una mejor práctica. */}
      <div style={{marginTop: '100px'}}>
        <h2>{article.title}</h2>
        <img src={article.image} alt={article.title} />
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export default ArticleBody;