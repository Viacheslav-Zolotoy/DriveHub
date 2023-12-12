import { Field, Formik } from 'formik';
import makes from '../../../data/makes.json';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filter/filterSlice';
import { FormContainer, FormField } from './Filter.styled';
const carBrands = makes;
const hourlyPrices = [
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '100',
  '150',
  '200',
  '250',
  '300',
  '350',
  '400',
  '450',
  '500',
  '1000',
];
const FilterForm = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(
      setFilters({
        carBrand: '',
        hourlyPrice: '',
        mileage: { from: '', to: '' },
      })
    );
  };

  return (
    <Formik
      initialValues={{
        carBrand: '',
        hourlyPrice: '',
        mileage: { from: '', to: '' },
      }}
      onSubmit={(values) => {
        dispatch(setFilters(values));
      }}
    >
      <FormContainer>
        <div>
          <label htmlFor="carBrand">Car brand</label>
          <Field as="select" name="carBrand">
            <option value="">Enter the text</option>
            {carBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>

        <div>
          <label htmlFor="hourlyPrice">Price/1 hour</label>
          <Field as="select" name="hourlyPrice">
            <option value="">To $</option>
            {hourlyPrices.map((price) => (
              <option key={price} value={price}>
                {`${price}`}
              </option>
            ))}
          </Field>
        </div>

        <div>
          <p>Car mileage / km </p>
          <label htmlFor="mileageFrom"></label>
          <Field type="number" name="mileage.from" />
          <label htmlFor="mileageTo"></label>
          <Field type="number" name="mileage.to" />
        </div>

        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </FormContainer>
    </Formik>
  );
};

export default FilterForm;
