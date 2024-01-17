import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 2px solid #e0e0e0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #0095ff,
    0 0 10px #0095ff,
    0 0 20px #0095ff,
    0 0 40px #0095ff,
    0 0 80px #0095ff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;
