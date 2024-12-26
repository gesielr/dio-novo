import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121214;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #e83f5b;
`;

export const SubTitle = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #c4c4c4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #202024;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #7c7c8a;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #e83f5b;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d73754;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3e3e3e;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #525252;
  }
`;
