import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: inherit;
  z-index: 2;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.15);
  }
`;

export const UserName = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #ab47b2;
  z-index: 2;
`;
export const ButtonLogout = styled.button`
  font-weight: 700;
  font-size: 24px;
  color: inherit;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.15);
  }
`;
