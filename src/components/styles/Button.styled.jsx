import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#fff"};
  border: 1px solid #a62440;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin-right: 0.6rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.97);
  }
`;

export default Button;
