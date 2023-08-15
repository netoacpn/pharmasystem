import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  background-color: #363636; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 25px;
    margin-left: 25px;
    cursor: pointer;
  }
`;