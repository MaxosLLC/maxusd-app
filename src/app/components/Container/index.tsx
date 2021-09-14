import styled from 'styled-components';
export const PageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #121318;
`;
export const PageBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 40px 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px 20px;
  }
`;
export const PageList = styled.div`
  flex: 1;
`;
export const MainTitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
export const MainTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
`;
export const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Divider = styled.div`
  width: 50%;
  height: 2px;
  background-color: #fff;
`;