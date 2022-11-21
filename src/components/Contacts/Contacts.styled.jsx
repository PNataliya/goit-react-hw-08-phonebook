// import styled from '@emotion/styled';

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 4px;
//   border: 1px solid #2a2a2a;
//   border-radius: 4px;
// `;

// export const Text = styled.p`
//   margin-top: 0;
//   margin-bottom: 0;
// `;

// export const Button = styled.button`
//   border: none;
//   font: inherit;
//   cursor: pointer;
//   outline: none;
//   margin-left: auto;
//   border-radius: 4px;
//   padding: 8px 12px;
//   background-color: #3f51b5;
//   color: #fff;

//   :hover,
//   :focus {
//     background-color: #303f9f;
//   }

//   :active {
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
//   }
// `;

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
  margin-right: 15px;
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
