import { useSelector } from 'react-redux';
import { getLoading } from '../../redux/advert/advertSelector';
import { CarCard } from '../CarCard/CarCard';
import { ListContainer } from './CarsList.styled';

export const CarList = ({ cars }) => {
  const isLoading = useSelector(getLoading);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ListContainer>
          {cars.length === 0 ? (
            <div> Sorry car not found! </div>
          ) : (
            cars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))
          )}
        </ListContainer>
      )}
    </>
  );
};
