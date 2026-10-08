import PropTypes from 'prop-types';
import './AnimalCard.css';

const noAdditionalInformation = {
  notes: 'No Additional Information',
};

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  image,
  additional = noAdditionalInformation,
}) {
  const showAdditional = () => {
    const details = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    window.alert(details);
  };

  return (
    <article className="animal-card">
      <img className="animal-card__image" src={image} alt={name} />
      <div className="animal-card__topline">
        <span aria-hidden="true">●</span>
        <span>Animal profile</span>
      </div>
      <h2>{name}</h2>
      <p className="scientific-name">{scientificName}</p>
      <dl className="animal-details">
        <div>
          <dt>Size</dt>
          <dd>{size} kg</dd>
        </div>
        <div>
          <dt>Diet</dt>
          <dd>{diet.join(', ')}</dd>
        </div>
      </dl>
      <button type="button" onClick={showAdditional}>
        More info
      </button>
    </article>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

// Retained for the exercise API; the parameter default above also supports React 19.
AnimalCard.defaultProps = {
  additional: noAdditionalInformation,
};
