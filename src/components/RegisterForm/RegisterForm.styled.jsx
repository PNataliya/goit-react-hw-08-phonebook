import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
`;
export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
  opacity: 0.8;
`;

export const Input = styled.input`
  padding: 5px 10px;
  font-size: 14px;
  color: #000;
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

export const Button = styled.button`
  margin-top: 30px;
  padding: 10px;
  width: 200px;
  font-weight: 500;

  font-size: 20px;
  color: #fff;
  background-color: #0084ff;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color, color 250ms linear;

  :hover,
  :focus {
    background-color: #000cb6b7;
    color: #000;
  }
`;
