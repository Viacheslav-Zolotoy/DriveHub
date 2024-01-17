import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImgWrapper = styled.div`
  overflow: hidden;
  width: 461px;
  height: 264px;
  border-radius: 14px;
`;
export const InfoWrapper = styled.div`
  margin-top: 10px;
`;
export const Title = styled.h2`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  & span:first-child {
    color: #3470ff;
  }
  & span:nth-child(2) {
  }
`;
export const CardInfoModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;

  & p {
    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  & p:nth-last-child(1) {
    padding-left: 6px;
  }
  & p:not(:last-child):not(:first-child) {
    padding: 0 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.5);
  }
  & p:first-child {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.5);
  }
  & div {
    display: flex;
  }
`;
export const Description = styled.p`
  color: #121417;
  margin-top: 14px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const SecondaryTitle = styled.h3`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 14px;
`;

export const Functionalities = styled.div`
  gap: 4px;
  margin-top: 8px;
  & ul {
    display: flex;
  }
  & li {
    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  & li:nth-last-child(1) {
    padding-left: 6px;
  }
  & li:not(:last-child):not(:first-child) {
    padding: 0 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.5);
  }
  & li:first-child {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.5);
  }
`;

export const RentalTitle = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 14px;
`;
export const RentailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;
export const ConditionWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const TitleAgeMileagePrice = styled.p`
  color: #363535;
  display: flex;
  align-items: center;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const ValueAgeMileagePrice = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  margin-left: 4px;
`;
export const ButtonRentalCar = styled.a`
  display: flex;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  width: 168px;
  height: 44px;
  background: #3470ff;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  margin-top: 24px;
  padding: 12px 50px;
  cursor: pointer;
`;
