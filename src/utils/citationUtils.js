// utils/citationUtils.js

export const generateApaCitation = (fuente, autores) => {
  // Helper function to format author names
  const formatAuthor = (autor) => {
    return `${autor.apellido}, ${autor.nombre.charAt(0)}.`;
  };

  // Format authors
  let formattedAuthors = autores.map(formatAuthor).join(', ');
  if (autores.length > 1) {
    const lastCommaIndex = formattedAuthors.lastIndexOf(',');
    formattedAuthors = formattedAuthors.slice(0, lastCommaIndex) + ' &' + formattedAuthors.slice(lastCommaIndex + 1);
  }

  // Format publication year
  const publicationYear = fuente.fecha_publicacion ? `(${fuente.fecha_publicacion}).` : '(n.d.).';

  // Format title
  const title = fuente.titulo ? `${fuente.titulo}.` : '';

  // Format source-specific information
  let sourceInfo = '';
  switch (fuente.tipo) {
    case 'libro':
      sourceInfo = fuente.editorial ? `${fuente.editorial}.` : '';
      break;
    case 'revista':
      sourceInfo = `${fuente.nombre_revista ? fuente.nombre_revista + ', ' : ''}${fuente.volumen ? fuente.volumen : ''}${fuente.numero ? `(${fuente.numero})` : ''}${fuente.pagina ? `, ${fuente.pagina}.` : '.'}`;
      break;
    case 'web':
      sourceInfo = `${fuente.nombre_web ? fuente.nombre_web + '. ' : ''}${fuente.url ? `Retrieved from ${fuente.url}` : ''}`;
      break;
    case 'diario':
      sourceInfo = `${fuente.nombre_revista ? fuente.nombre_revista + '. ' : ''}${fuente.fecha_publicacion ? `${fuente.fecha_publicacion}. ` : ''}${fuente.url ? `Retrieved from ${fuente.url}` : ''}`;
      break;
    default:
      break;
  }

  // Combine all parts into the final citation
  const citation = `${formattedAuthors} ${publicationYear} ${title} ${sourceInfo}`;
  return citation.trim();
};

export default generateApaCitation;
