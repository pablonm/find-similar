import styled from "styled-components";

export const Search = styled.div`
  display: block;
  width: 100%;
`;

export const Shadow = styled.span`
  display: flex;
  -webkit-box-shadow: 3px 3px 0px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 3px 0px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 0px 2px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border: none;
  outline: none;
  font-family: "Roboto";
  padding-left: 20px;
  padding-right: 20px;

  &::placeholder {
    color: #e6e6e6;
    font-style: italic;
  }
`;

export const Button = styled.button`
  background: #facc2e;
  width: 60px;
  height: 60px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #ffbf00;
  }

  img {
    width: 25px;
  }
`;
