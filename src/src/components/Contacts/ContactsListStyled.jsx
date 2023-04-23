import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: number;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-style: italic;
  font-size: calc((1vh + 1vw) * 1.3);
`;

export const Styleddiv = styled.div`
  font-size: calc((1vh + 1vw) * 1.2);
  border: 3px solid lightblue;
  background-color: #71b4f7;
  box-shadow: 3px 4px 7px 3px lightgray;
  width: calc((10vh + 20vw) * 2);
  padding: 20px 20px;
  border-radius: 12px;
  margin: 20px 30px;
`;
