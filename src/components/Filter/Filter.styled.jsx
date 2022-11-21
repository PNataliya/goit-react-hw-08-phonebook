import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 23px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  align-items: center;
`;
export const Text = styled.p`
  font-weight: 500;
  padding: 10px;
`;

export const Input = styled.input`
  height: 40px;

  padding: 5px 10px;
  font-size: 14px;
  color: inherit;

  outline: none;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 3px;

  :focus {
    border-color: rgb(111, 111, 207);
  }

  ::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.75);
  }
`;
