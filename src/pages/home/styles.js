import styled from 'styled-components';

export const Container = styled.div`
  background-color: #121214;
  color: white;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  img {
    height: 50px;
  }

  nav a {
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #e91e63;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px;
    outline: none; /* Remove o contorno padrão ao clicar no botão */
    text-decoration: none; /* Remove o sublinhado */ 
    &:hover {
    background-color: #d81b60; /* Cor ao passar o mouse no botão */
  }
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  img {
    max-height: 400px;
  }

  div {
    max-width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #e91e63;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

export const Button = styled.button`
  background-color: #e91e63;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none; /* Remove o sublinhado */ 

  &:hover {
    background-color: #d81b60;
  }
`;


