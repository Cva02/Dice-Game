import styled from "styled-components";

 export const Button = styled.button`
  min-width: 220px;
  color: #fff;
  padding: 10px 18px;
  border:none;
  background:#000;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: #fffefe;
    color: #000;
    border: 1px solid #000;
    transition: all 0.3s ease-in-out;
    }`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid #000;
    color: #000;
    &:hover {
        background-color: #000;
        border: 1px solid transparent;
        color: #fff;
    }
`;