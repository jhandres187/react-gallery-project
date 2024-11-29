import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Gallery = ({ images }) => {
  // Verifica si las imágenes están cargadas correctamente
  if (!images.length) {
    return <p>Loading images...</p>;
  }

  return (
    <div className="container thumbnail-container mt-2">
      {images.map((image, index) => (
        <Link key={index} to={image.path} className="links">
          <figure className="thumbnail-image-size">
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.alt}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

