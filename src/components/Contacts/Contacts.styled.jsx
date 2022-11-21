import styled from '@emotion/styled';

export const ContactData = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  height: 30px;
  width: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: #0084ff3d;

  margin-right: 15px;
  padding: 5px;
  border-radius: 3px;

  color: inherit;
`;

export const ContactName = styled.p`
  font-weight: 700;
  margin-right: 15px;
`;

export const ContactNumber = styled.p`
  font-weight: 700;
  margin-right: 30px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  padding: 5px;

  border: none;
  border-radius: 3px;

  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #0084ff;
  }
`;
