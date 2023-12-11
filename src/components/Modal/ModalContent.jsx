import { CardInfo, TitleContainer } from '../CarCard/CarCard.styled';
import { ButtonRentalCar, Img, ImgWrapper } from './ModalContent.styled';

export const ModalContent = ({ car }) => {
  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const state = addressParts[2].trim();
  const conditionsArray = car.rentalConditions.split('\n');
  const formattedMileage = car.mileage.toLocaleString('en-US');
  const formattedRentalPrice = `${parseInt(car.rentalPrice.slice(1))}$`;

  return (
    <div className="modal-content">
      <ImgWrapper>
        <Img src={car.img} alt="" />
      </ImgWrapper>
      <div className="car-card__info">
        <TitleContainer>
          <h3>
            {car.make} {car.model}, <span>{car.year}</span>
          </h3>
        </TitleContainer>
        <CardInfo>
          <p>{city}</p>|<p>{state}</p>|<p>{car.rentalCompany}</p>
          <p>{car.type}</p>|<p>{car.model}</p>|<p>{car.mileage}</p>|
          <p>{car.accessories[0]}</p>
        </CardInfo>
      </div>
      <p>{car.description}</p>
      <div>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {car.accessories.map((accessory) => (
            <li key={accessory}>{accessory}</li>
          ))}
        </ul>
        <ul>
          {car.functionalities.map((functionality) => (
            <li key={functionality}>{functionality}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Rental Conditions:</h3>
        <ul>
          {conditionsArray.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
          <p>
            Mileage: <span>{formattedMileage}</span>
          </p>
          <p>
            Price: <span>{formattedRentalPrice}</span>
          </p>
        </ul>
      </div>
      <ButtonRentalCar href={`tel:${+380730000000}`}>
        Rental car
      </ButtonRentalCar>
    </div>
  );
};
