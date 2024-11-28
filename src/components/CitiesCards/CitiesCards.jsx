const CityCard = ({ imageUrl, cityName, propertiesCount, linkUrl }) => {
  return (
    <div style={{ width: '300px' }}>
      <div>
        <a className="city-card" href={linkUrl} tabIndex="0" style={{ width: '100%', display: 'inline-block' }}>
          <img className="city-card__thumb" src={imageUrl} alt={`${cityName} image`} />
          <div className="city-card__content">
            <h3 className="city-card__title">{cityName}</h3>
            <span className="city-card__text">{propertiesCount} Properties</span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default CityCard;
