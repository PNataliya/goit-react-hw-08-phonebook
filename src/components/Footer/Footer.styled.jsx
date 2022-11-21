import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  background: linear-gradient(90deg, #131a77, #1a73e8);
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 9;
`;

export const DeveloperData = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-weight: 500;
`;

export const DeveloperLink = styled.link``;

export const Svg = styled(BsGithub)`
  margin-left: 5px;
  color: inherit;
  width: 25px;
  height: 25px;
  transform: scale(1);
  transition: all 250ms;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
