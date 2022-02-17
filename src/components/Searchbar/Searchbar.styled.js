import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 20px;
  padding: 15px 5px;
  background-color: transparent;
`;

export const FormInput = styled.input`
  font-size: 15px;
  display: inline-block;
  width: 400px;
  height: 31px;
  margin-right: 20px;
  padding: 5px 10px;
  background-color: white;
  color: black;
  border-radius: 8px;
  border: 1px solid green;
  border-radius: 5px;
  outline: none;
  &:hover,
  &:focus {
    outline: 1px solid green;
  }
`;

export const Button = styled.button`
  font-size: 15px;
  text-align: center;
  min-width: 70px;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid green;
  border-radius: 15px;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 2px solid green;
  }
`;
