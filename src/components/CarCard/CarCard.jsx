import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/favorites/favoritesSlice';
import { getFavorites } from '../../redux/favorites/favoritesSelector';
import {
  CarCardInfo,
  CardContainer,
  CardImage,
  CardInfo,
  CardTitle,
  Favorite,
  LernMore,
  TitleContainer,
} from './CarCard.styled';
import FavoriteSvg from '../FavoriteSvg/FavoriteSvg';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isFavorite = favorites.some((favoriteId) => favoriteId === car.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite({ id: car.id }));
    } else {
      dispatch(addToFavorite({ id: car.id }));
    }
  };
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const state = addressParts[2].trim();

  return (
    <>
      <CardContainer>
        <div>
          <CardImage src={car.img} alt={car.make} />
        </div>
        <Favorite onClick={handleToggleFavorite}>
          {!isFavorite ? (
            <FavoriteSvg strokeColor={'#e1e1de'} fillColor={'transparent'} />
          ) : (
            <FavoriteSvg strokeColor={'#3470FF'} fillColor={'#3470FF'} />
          )}
        </Favorite>
        <CarCardInfo className="car-card__info">
          <TitleContainer>
            <CardTitle>
              {' '}
              <h3>
                {car.make}, <span>{car.year}</span>
              </h3>
            </CardTitle>
            <p>{car.rentalPrice}</p>
          </TitleContainer>
          <CardInfo>
            <div>
              {' '}
              <p>{city}</p>
              <p>{state}</p>
              <p>{car.rentalCompany}</p>
            </div>
            <div>
              {' '}
              <p>{car.type}</p>
              <p>{car.model}</p>
              <p>{car.mileage}</p>
              <p>{car.accessories[0]}</p>
            </div>
          </CardInfo>
        </CarCardInfo>
        <LernMore onClick={handleToggleModal} type="button">
          Learn More
        </LernMore>
      </CardContainer>

      <Modal
        car={car}
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
      />
    </>
  );
};
