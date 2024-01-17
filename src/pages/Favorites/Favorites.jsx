import { useDispatch, useSelector } from 'react-redux';
import { CarList } from '../../components/CarList/CarsList';
import { Container, Title } from './Favorites.styled';
import { getFavorites } from '../../redux/favorites/favoritesSelector';
import { getAdvert } from '../../redux/advert/advertSelector';
import { useEffect } from 'react';
import { fetchAdvert } from '../../redux/advert/advertOperation';

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);
  const cars = useSelector(getAdvert) || [];
  const favoritesCars = useSelector(getFavorites);
  const filteredCars = cars.filter((car) => favoritesCars.includes(car.id));

  return (
    <Container>
      <Title>Favorites Page</Title>
      <CarList cars={filteredCars} />
    </Container>
  );
};

export default Favorites;
