import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  display: flex;
  max-width: max-content;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  & label {
    font-weight: bold;
    margin-bottom: 8px;
  }
`;
export const FormField = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
