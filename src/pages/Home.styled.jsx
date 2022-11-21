import styled from '@emotion/styled';

// export const Container = styled.div`
//   position: relative;
//   margin: 0 auto;
//   padding: 35px;
//   max-width: 1280px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const Box = styled.div`
//   display: flex;
//   padding: 35px;
//   width: 698px;
//   flex-direction: column;
//   flex-wrap: wrap;
//   align-items: flex-start;
// `;

export const MainContainer = styled.main`
  min-height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* flex: auto;
  flex-grow: 1; */
`;

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 0 35px;
  max-width: 1280px;
`;

export const Box = styled.div`
  width: 698px;
  display: flex;
  align-items: flex-start;
  padding-top: 60px;
  padding-bottom: 60px;
`;
