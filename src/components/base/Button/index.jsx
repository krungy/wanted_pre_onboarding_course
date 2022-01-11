import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import color from '@assets/colors';

const ButtonContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: ${color.black};
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer type="button" {...props}>
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

const AnchorContainer = styled.a`
  display: flex;
  text-decoration: none;
  color: ${({ color }) => color};
  padding: ${({ border }) => (border ? `0 10px 0 10px` : '24px')};
  border: ${({ border }) => (border ? '1px solid #e1e2e3' : `none`)};
  border-radius: ${({ border }) => (border ? '15px' : `none`)};
  line-height: ${({ border }) => (border ? '30px' : `20px`)};
`;

export const TextAnchorButton = ({
  children,
  border,
  color,
  src,
  ...props
}) => {
  const isBordered = border ? true : false;

  return (
    <ButtonContainer type="button" {...props}>
      <AnchorContainer href={src} border={isBordered} color={color}>
        {children}
      </AnchorContainer>
    </ButtonContainer>
  );
};

TextAnchorButton.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.bool,
  src: PropTypes.string,
  color: PropTypes.string,
};

TextAnchorButton.defaultProps = {
  border: false,
  src: '#',
  color: color.black,
};