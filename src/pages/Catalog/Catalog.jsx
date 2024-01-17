import { Container } from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdvert } from '../../redux/advert/advertOperation';
import { CarList } from '../../components/CarList/CarsList';
import FilterForm from '../../components/Filter/Filter';
import { getFilteredAdverts } from '../../redux/filter/filterSelector';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);
  const cars = useSelector((state) => getFilteredAdverts(state)) || [];

  return (
    <Container>
      <FilterForm />
      <CarList cars={cars} />
    </Container>
  );
};

export default Catalog;
