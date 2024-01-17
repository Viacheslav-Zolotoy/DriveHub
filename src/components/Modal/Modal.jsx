import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  IconWrapper,
  ModalContainer,
  ModalOverlay,
  StyledCloseIcon,
} from './Modal.styled';
import { ModalContent } from './ModalContent';
import Svg from '../Svg/Svg';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ isOpen, handleToggleModal, car }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleToggleModal();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleToggleModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleToggleModal]);
  return (
    <>
      {isOpen &&
        createPortal(
          <ModalOverlay>
            <ModalContainer ref={modalRef}>
              <Svg
                id={'icon-cross'}
                size={'24px'}
                onClick={handleToggleModal}
                stroke={'#54ADFF'}
                StyledCloseIcon={StyledCloseIcon}
                IconWrapper={IconWrapper}
              />
              <ModalContent car={car} />
            </ModalContainer>
          </ModalOverlay>,
          modalRoot
        )}
    </>
  );
}
