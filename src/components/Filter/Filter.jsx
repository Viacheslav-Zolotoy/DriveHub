import { Formik } from 'formik';
import makes from '../../../data/makes.json';
import SendIcon from '@mui/icons-material/Send';

import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filter/filterSlice';
import {
  BrandPriceContainer,
  FormButtonContainer,
  FormContainer,
  FormFieldBrand,
  FormFieldMileage,
  FormFieldPrice,
  FormTitle,
} from './Filter.styled';
import { Button, InputAdornment, MenuItem, TextField } from '@mui/material';

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
      {({ values, handleChange }) => (
        <FormContainer>
          <BrandPriceContainer>
            <FormTitle htmlFor="carBrand">Car brand</FormTitle>
            <FormFieldBrand
              name="carBrand"
              value={values.carBrand}
              onChange={handleChange}
              displayEmpty
              sx={{ '& fieldset': { border: 'none' } }}
            >
              <MenuItem value="" disabled>
                Enter car brand
              </MenuItem>
              {carBrands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </FormFieldBrand>
          </BrandPriceContainer>
          {/*  */}
          <BrandPriceContainer>
            <FormTitle htmlFor="hourlyPrice">Price/1 hour</FormTitle>
            <FormFieldPrice
              name="hourlyPrice"
              value={values.hourlyPrice}
              onChange={handleChange}
              displayEmpty
              sx={{ '& fieldset': { border: 'none' } }}
              renderValue={(value) => {
                if (value !== '') {
                  return `To ${value}$`;
                }
                return 'To  $';
              }}
            >
              {hourlyPrices.map((price) => (
                <MenuItem key={price} value={price}>
                  {`${price}`}
                </MenuItem>
              ))}
            </FormFieldPrice>
          </BrandPriceContainer>

          <div>
            <FormTitle>Car mileage / km </FormTitle>
            <FormFieldMileage>
              <label htmlFor="mileageFrom"></label>
              <TextField
                type="number"
                name="mileage.from"
                value={values.mileage.from}
                onChange={handleChange}
                sx={{
                  width: '160px',
                  height: '48px ',
                  borderRadius: '14px 0px 0px 14px',
                  background: '#f7f7fb',
                  border: 'none',
                  justifyContent: 'center',
                  '& fieldset': { border: 'none' },
                  '& p ': {
                    color: '#121417',
                    fontFamily: 'Manrope',
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '20px',
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">From</InputAdornment>
                  ),
                }}
              />
              <label htmlFor="mileageTo"></label>
              <TextField
                type="number"
                name="mileage.to"
                value={values.mileage.to}
                onChange={handleChange}
                sx={{
                  width: '160px',
                  height: '48px ',
                  borderRadius: '0px 14px 14px 0px',
                  borderLeft: '2px solid rgba(138, 138, 137, 0.20)',
                  background: '#f7f7fb',
                  justifyContent: 'center',
                  '& fieldset': { border: 'none' },
                  '& p ': {
                    color: '#121417',
                    fontFamily: 'Manrope',
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '20px',
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">To</InputAdornment>
                  ),
                }}
              />
            </FormFieldMileage>
          </div>
          <FormButtonContainer>
            <Button
              sx={{
                display: 'flex',
                width: '136px',
                height: '48px',
                padding: '14px 44px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px',
              }}
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
            >
              Search
            </Button>
            <Button
              sx={{
                display: 'flex',
                width: '136px',
                height: '48px',
                padding: '14px 44px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px',
              }}
              variant="contained"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </Button>
          </FormButtonContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

export default FilterForm;
