import sprite from '../../assets/sprite.svg';

const Svg = ({
  id,
  size,
  fill,
  stroke,
  onClick,
  StyledCloseIcon,
  IconWrapper,
}) => {
  return (
    <IconWrapper onClick={onClick}>
      <StyledCloseIcon width={size} height={size} fill={fill} stroke={stroke}>
        <use href={`${sprite}#${id}`} />
      </StyledCloseIcon>
    </IconWrapper>
  );
};

Svg.defaultProps = {
  size: 24,
};

export default Svg;
