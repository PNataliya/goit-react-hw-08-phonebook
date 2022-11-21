import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 20px;
`;
// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;
// `;

export const Text = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: inherit;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.15);
  }
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
