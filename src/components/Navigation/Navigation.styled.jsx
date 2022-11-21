import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0 12px;
  font-weight: 700;
  font-size: 20px;
  color: inherit;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.15);
  }
  &.active {
    color: #ab47b2;
  }
`;
