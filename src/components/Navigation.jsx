import { Link } from 'react-router-dom'; // Asegúrate de que esto esté importado
import PropTypes from 'prop-types';

export const Navigation = ({ images }) => {
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
// Y eliminar la validación de props
Navigation.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};