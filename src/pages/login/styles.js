import styled from 'styled-components';

// Estilo do container principal que envolve a página inteira
export const Container = styled.div`
  background-color: #121214; /* Cor de fundo escura */
  color: white; /* Cor do texto branco */
  min-height: 100vh; /* Altura mínima igual à altura da tela */
  display: flex; /* Usado para criar layout flexível */
  flex-direction: column; /* Organiza os itens em coluna */
  align-items: center; /* Centraliza os itens horizontalmente */
`;

// Estilo do cabeçalho (Header) da página
export const Header = styled.header`
  display: flex; /* Usado para layout flexível */
  justify-content: space-between; /* Espaço igual entre logo e navegação */
  align-items: center; /* Centraliza os itens verticalmente */
  padding: 1rem 0rem; /* Espaçamento interno do header */
  width: 100%; /* Ocupa a largura completa */

  img {
    height: 50px; /* Define a altura da logo */
    position: relative;
    left: 25px;

   }


   nav {
  display: flex; /* Layout flexível para os links */
  align-items: center; /* Alinha os links verticalmente */
  position: absolute;
  right: 100px;
  gap: 45px; /* Adiciona espaçamento entre os itens (links e botão) */
}

nav a {
  color: white;
  text-decoration: none; /* Remove o sublinhado */
  font-size: 18px;
  font-weight: bold;
  padding: 10px 25px; /* Espaçamento interno para parecer um botão */
  border-radius: 5px; /* Borda arredondada */
  background-color: #e91e63; /* Fundo para os links individuais */
  &:hover {
    background-color: #d81b60; /* Cor ao passar o mouse no botão */
  }

}

nav button {
  padding: 12px; /* Espaçamento interno para parecer um botão */
  border-radius: 5px; /* Borda arredondada */
  border: none;
  background-color: #e91e63; /* Fundo para o botão */
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer; 
}

`;

// Estilo do conteúdo principal que divide o layout em dois lados
export const Content = styled.div`
  display: flex; /* Layout flexível para alinhar os dois lados (texto e formulário) */
  justify-content: space-between; /* Espaçamento entre os lados */
  align-items: center; /* Centraliza verticalmente */
  width: 100%; /* Ocupa toda a largura */
  max-width: 1200px; /* Largura máxima do conteúdo */
  margin-top: 2rem; /* Espaçamento superior */
  padding: 0 2rem; /* Espaçamento interno horizontal */

  > div {
    max-width: 40%; /* Largura máxima para o lado esquerdo do conteúdo */

    h1 {
      font-size: 2.5rem; /* Tamanho da fonte do título */
      margin-bottom: 1rem; /* Espaçamento inferior do título */
    }

    p {
      font-size: 1.2rem; /* Tamanho da fonte do parágrafo */
      color: #ccc; /* Cor do texto do parágrafo */
    }
  }
`;

// Estilo do formulário de login à direita
export const Form = styled.form`
  background-color: #202024; /* Fundo do formulário */
  padding: 2rem;
  border-radius: 8px;
  width: 30%;
  max-width: 400px;
  
  display: flex; /* Ativa o layout flexível */
  flex-direction: column; /* Organiza os elementos em coluna */
  justify-content: center; /* Centraliza os elementos verticalmente */
  align-items: center; /* Centraliza os elementos horizontalmente */

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    color: #aaa;
  }
`;

// Estilo dos campos de entrada (email e senha)
export const Input = styled.input`
  width: 100%; /* Campos ocupam toda a largura */
  padding: 10px; /* Espaçamento interno */
  margin: 10px 0; /* Espaçamento vertical entre os campos */
  font-size: 1rem; /* Tamanho da fonte */
  border-radius: 5px; /* Bordas arredondadas */
  border: 1px solid #333; /* Borda fina com cor escura */
  background-color: #121214; /* Fundo do campo de entrada */
  color: white; /* Cor do texto do campo */
`;

// Estilo do botão de login e botão Cadastrar no Header
export const Button = styled.button`
  background-color: #e91e63; /* Cor de fundo do botão */
  color: white; /* Cor do texto do botão */
  padding: 10px ; /* Espaçamento interno */
  border: none; /* Remove a borda */
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Ícone de clique ao passar o mouse */
  font-size: 18px; /* Tamanho da fonte */
  width: 100%; /* Botão no formulário ocupa a largura completa */
   

  &:hover {
    background-color: #d81b60; /* Cor ao passar o mouse no botão */
  }
`;

// Estilo do rodapé do formulário com links (Esqueci minha senha / Criar conta)
export const Footer = styled.div`
    margin-top: 1.5rem; /* Espaçamento superior do rodapé */
    display: flex;
    flex-direction: column; /* Elementos empilhados em coluna */
    align-items: center; /* Centraliza os links horizontalmente */
    a.link1 {
  font-size: 0.9rem; /* Tamanho da fonte dos links */
  color: #e91e63; /* Cor dos links */
  text-decoration: none; /* Remove o sublinhado */
}

a.link1:hover {
  text-decoration: underline; /* Sublinhado ao passar o mouse */
}

a.link2 {
  font-size: 0.9rem; /* Tamanho da fonte dos links */
  color: #e91e63; /* Cor dos links */
  text-decoration: none; /* Remove o sublinhado */
  margin-top: 10px;
}

a.link2:hover {
  text-decoration: underline; /* Sublinhado ao passar o mouse */
}


`;
