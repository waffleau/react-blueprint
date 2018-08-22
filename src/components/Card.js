// @flow

import styled from 'styled-components';

import Style from 'styles';

export const Card = styled.div`
  background-color: white;
  border: ${Style.vars.border};
  border-radius: ${Style.vars.borderRadius};
  box-shadow: ${Style.vars.boxShadow1};
  margin-bottom: ${Style.vars.padding};
  min-height: 2rem;
  width: 100%;
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: ${Style.vars.border};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Title = styled.span`
  display: block;
  font-size: ${Style.type.h3};
  font-weight: bold;
  line-height: 1;
`;

export const Content = styled.div`
  padding: ${Style.vars.padding};
  position: relative;
`;

export const Footer = styled.div`
  align-items: center;
  border-top: ${Style.vars.border};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.75rem;
`;

Card.Content = Content;
Card.Footer = Footer;
Card.Header = Header;
Card.Title = Title;

export default Card;
