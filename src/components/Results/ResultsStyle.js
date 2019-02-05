import styled from "styled-components";

export const Result = styled.div`
  display: flex;
  margin-top: 20px;
  background: #6e6e6e;
  padding: 15px 0;
  font-size: 1.5em;
  color: #e6e6e6;
  -webkit-box-shadow: 3px 3px 0px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 3px 3px 0px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 0px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background: #848484;
  }

  .emoji {
    width: 60px;
    text-align: center;
  }
`;

export const NoResults = styled.div`
  color: red;
`;

export const Error = styled.div`
  color: red;
`;
