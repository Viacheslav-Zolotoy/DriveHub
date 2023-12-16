import { Select } from '@mui/material';
import { Form } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  gap: 18px;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const FormTitle = styled.p`
  margin-bottom: 8px;
  color: #8a8a89;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const BrandPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormFieldPrice = styled(Select)`
  display: flex;
  width: 125px;
  height: 48px;
  align-items: flex-start;
  border-radius: 14px !important;
  background: #f7f7fb;
`;
export const FormFieldBrand = styled(Select)`
  display: flex;
  width: 224px;
  height: 48px;
  align-items: flex-start;
  border-radius: 14px !important;
  background: #f7f7fb;
`;

export const FormFieldMileage = styled.div`
  display: flex;
`;
export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;
