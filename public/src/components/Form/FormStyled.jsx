import styled from 'styled-components';

export const StyledTitle = styled.h1`
  text-align: left;
  margin-bottom: 30px;
  color: black;
  text-decoration: underline;
`;

export const StyledForm = styled.form`
  font-size: calc((1vh + 1vw) * 1.2);
  border: 3px solid lightblue;
  background-color: #71b4f7;
  box-shadow: 3px 4px 7px 3px lightgray;
  width: calc((10vh + 20vw) * 1.6);
  padding: 20px 20px;
  border-radius: 12px;
  margin: 20px 30px;
`;
export const StyledLabel = styled.label`
  font-size: calc((1vh + 1vw) * 1.4);
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: white;
  margin-top: 10px;
`;
export const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: calc((1vh + 1vw) * 1.3);
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid;
`;
