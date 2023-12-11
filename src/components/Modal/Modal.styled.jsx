import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: white;
  width: 541px;
  height: 752px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;

  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 2px;
`;

export const StyledCloseIcon = styled.svg`
  transition:
    transform 0.2s,
    stroke 0.2s;

  &:hover {
    stroke: #de0b08;
    transform: scale(1.25) rotate(90deg);
  }
`;
