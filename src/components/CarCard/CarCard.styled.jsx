import styled from 'styled-components';

export const CardContainer = styled.div`
  /* display: flex;
  justify-content: center; */
  /* align-items: center; */
  width: 274px;
  height: 426px;
  position: relative;
`;
export const Favorite = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 10px;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  & p {
    color: rgba(18, 20, 23, 0.5);

    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardTitle = styled.div`
  & h3 {
    color: #121417;

    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  & span {
    color: #121417;

    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;
export const LernMore = styled.button`
  width: 274px;
  height: 40px;
  background: #3470ff;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  line-height: 17px;
  margin-top: 20px;
  cursor: pointer;
`;
