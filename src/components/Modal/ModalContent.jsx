import { TitleContainer } from '../CarCard/CarCard.styled';
import {
  ButtonRentalCar,
  CardInfoModal,
  ConditionWrapper,
  Description,
  Functionalities,
  Img,
  ImgWrapper,
  InfoWrapper,
  RentailList,
  RentalTitle,
  SecondaryTitle,
  Title,
  TitleAgeMileagePrice,
  ValueAgeMileagePrice,
} from './ModalContent.styled';

export const ModalContent = ({ car }) => {
  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const state = addressParts[2].trim();
  const conditionsArray = car.rentalConditions.split('\n');
  const formattedMileage = car.mileage('en-US');
  const formattedRentalPrice = `${parseInt(car.rentalPrice.slice(1))}$`;

  return (
    <div className="modal-content">
      <ImgWrapper>
        <Img src={car.img} alt="" />
      </ImgWrapper>
      <InfoWrapper className="car-card__info">
        <TitleContainer>
          <Title>
            {car.make} <span>{car.model}</span>, <span>{car.year}</span>
          </Title>
        </TitleContainer>
        <CardInfoModal>
          <div>
            <p>{city}</p>
            <p>{state}</p>
            <p>Id: {car.id}</p>
            <p>Year: {car.year}</p>
            <p>Type: {car.type}</p>
          </div>
          <div>
            {' '}
            <p>Fuel Consumption: {car.fuelConsumption}</p>
            <p>Engine Size: {car.engineSize}</p>
          </div>
        </CardInfoModal>
      </InfoWrapper>
      <Description>{car.description}</Description>
      <div>
        <SecondaryTitle>Accessories and functionalities:</SecondaryTitle>
        <Functionalities>
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
        </Functionalities>
      </div>
      <div>
        <RentalTitle>Rental Conditions:</RentalTitle>
        <RentailList>
          <ConditionWrapper>
            {' '}
            {conditionsArray.map((condition, index) => (
              <li key={index}>
                {condition.includes('Minimum age') ? (
                  <>
                    <TitleAgeMileagePrice>
                      Minimum age:
                      <ValueAgeMileagePrice>
                        {parseInt(condition.match(/\d+/)[0])}
                      </ValueAgeMileagePrice>
                    </TitleAgeMileagePrice>
                  </>
                ) : (
                  <TitleAgeMileagePrice>{condition}</TitleAgeMileagePrice>
                )}
              </li>
            ))}
          </ConditionWrapper>
          <ConditionWrapper>
            {' '}
            <TitleAgeMileagePrice>
              Mileage:
              <ValueAgeMileagePrice>{formattedMileage}</ValueAgeMileagePrice>
            </TitleAgeMileagePrice>
            <TitleAgeMileagePrice>
              Price:
              <ValueAgeMileagePrice>
                {formattedRentalPrice}
              </ValueAgeMileagePrice>
            </TitleAgeMileagePrice>
          </ConditionWrapper>
        </RentailList>
      </div>
      <ButtonRentalCar href={`tel:${+380730000000}`}>
        Rental car
      </ButtonRentalCar>
    </div>
  );
};
