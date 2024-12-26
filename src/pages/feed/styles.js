import styled from 'styled-components';


export const Container = styled.div`
  background-color: #121214;
  color: white;
  height: 100vh; /* Garante que ocupe a altura total da janela */
  width: 100vw; /* Garante que ocupe a largura total da janela */
  display: flex;
  flex-direction: column;
  /* Remove margens/paddings do body para ocupar toda a tela */
  margin: 0;
  padding: 0;
  overflow: hidden; /* Opcional: Evita barras de rolagem indesejadas */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #202024;

  img {
    height: 40px;
  }

  nav a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif; /* Aplica a fonte */
  }

  nav a:hover {
    text-decoration: underline;
  }
`;

export const SearchBar = styled.div`
  input {
    padding: 8px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    width: 450px;
    background-color: #3e3e3e;
    color: white;
  }

  input::placeholder {
    color: #7c7c7c;
  }
`;

export const FeedContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const FeedArea = styled.div`
width: 767px;
height: 320px;
top: opx;
left: 15px;
gap: 0px;
opacity: 0px;
position: relative;

h2.feed {
  top: 15px;
  font-size: 18px;
  position: relative;
  }
  

`;
export const FeedCard1 = styled.div`
  width: 867px;
  height: 210px;
  position: relative; /* Para posicionar o conteúdo corretamente */
  box-sizing: border-box;
  margin: 0 auto; /* Centraliza horizontalmente */
  border-radius: 5px; /* Borda arredondada */
  overflow: hidden; /* Garante que a imagem não ultrapasse os limites da div */
  top: 30px;

  /* Imagem de fundo */
  background-image: url(${props => props.image});
  background-size: cover; /* Garante que a imagem preencha a área */
  background-position: center -147px; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetição */

 
`;


export const FeedCard2 = styled.div`
  width: 867px;
  height: 260px;
  position: relative; /* Para posicionar o conteúdo corretamente */
  box-sizing: border-box;
  margin: 0 auto; /* Centraliza horizontalmente */
  border-radius: 5px; /* Borda arredondada */
  overflow: hidden; /* Garante que a imagem não ultrapasse os limites da div */
  top:60px;

  /* Imagem de fundo */
  background-image: url(${props => props.image});
  background-size: cover; /* Garante que a imagem preencha a área */
  background-position: center -120px;  /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetição */

  
`;

/*============================================================*/
export const Feedretangulo1 = styled.div`
  width: 867px;
  height: 180px;
  background-color: #2c3e50; /* Fundo escuro para o retângulo */
  color: white; /* Texto branco */
  border-radius: 0px;
  display: flex; /* Para empilhar os filhos */
  flex-direction: column;
  justify-content: space-between; /* Distribuir espaço interno */
  padding: 10px; /* Reduzido para garantir que os elementos caibam */
  position: relative; /* Mantenha relativo */
  box-sizing: border-box; /* Ajusta para incluir padding na largura */
  margin: 0 auto; /* Centraliza horizontalmente */
  overflow: hidden; /* Garante que os elementos não ultrapassem a div */
  gap: 5px; /* Adiciona espaço entre os elementos para evitar colisão */
  font-family: 'Open Sans', sans-serif; /* Aplica a fonte */
  
  p:not(.time-info):not(.description):not(.tags):not(.likes) {
   
  }

  h2.nome {
    margin: 0;
    font-size: 18px;
  }
`;

 

export const TimeInfo = styled.p`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  left: 60px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  position: relative;
  top: -12px;

`;

export const Title = styled.h2`
  font-size: 16px;
  color: white;
  margin: 0;
  position: relative;
  top: -5px;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #ddd;
  margin: 0;
  position: relative;
  top: -10px;
`;

export const Tags = styled.p`
  font-size: 10px;
  color: #aaa;
  margin: 0;
  position: relative;
  top: -10px;
`;

export const Likes = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
  position: relative;
  top: 0px;
  left: 25px;
`;

export const Highlight = styled.strong`
  color: #fff;
  font-weight: bold;
`;

/*============================================================*/

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 16px;
    margin: 0; /* Remove margens extras do h2 */
    color: white; /* Cor do texto */
  }
`;

/*================================================*/

export const Sidebar = styled.div`
width: 299px;
height: 450px;
position: relative;
border: 3px solid #FFFFFF;
padding: 1rem; /* Espaçamento interno */
box-sizing: border-box; /* Inclui padding na largura */
font-family: 'Open Sans', sans-serif; /* Aplica a fonte */
right: 60px;
top: 50px;

ul {
    list-style: none; /* Remove marcadores da lista */
    padding: 0;
    margin: 0;
  }
 
 
  li {
  display: flex;
  flex-direction: column; /* Empilha os elementos verticalmente */
  align-items: flex-start; /* Alinha itens à esquerda */
  gap: 5px; /* Espaço entre os elementos */
  margin-bottom: 15px; /* Espaço entre os itens da lista */
}

span {
  display: inline-flex; /* Mantém na mesma linha */
  align-items: center;
}


`;

export const FotoName = styled.div`
  display: flex; /* Alinha o avatar e o nome em linha */
  align-items: center; /* Alinha verticalmente */
  gap: 10px; /* Espaço entre o avatar e o nome */
  margin-bottom: 5px; /* Espaço inferior entre o nome e a barra de progresso */
  margin-left: 10px;
`;




export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; /* Avatar circular */
  border: 2px solid white; /* Borda branca */
`;

export const ListItem = styled.li`
  display: flex; /* Exibe os elementos em linha */
  align-items: center; /* Alinha verticalmente os elementos */
  gap: 10px; /* Espaço entre o avatar e o nome */
  margin-bottom: 15px; /* Espaço entre os itens da lista */
  list-style: none; /* Remove o marcador da lista */
`;

export const UserName = styled.span`
  font-size: 16px; /* Tamanho do texto */
  font-weight: bold; /* Texto em negrito */
  color: white; /* Cor do texto */
`;

export const Bar = styled.div`
  width: 160px; /* Largura total da barra */
  height: 10px; /* Altura da barra */
  background-color: #ccc; /* Cor de fundo para a barra */
  border-radius: 5px; /* Borda arredondada */
  position: relative; /* Necessário para posicionar o preenchimento */
  overflow: hidden; /* Garante que nada exceda a barra */
  margin-top: 0px; /* Espaçamento superior */
  margin-bottom: 15px;
  margin-left: 55px;
  `;

export const LevelFilled = styled.div`
  width: 50%; /* Percentual do nível preenchido */
  height: 100%; /* Altura total */
  background-color: #4caf50; /* Cor do preenchimento (verde) */
  border-radius: 5px; /* Combina com a borda da barra */
  position: relative; /* Para ajustar o preenchimento dentro do contêiner */
  top: 0;
  left: 0;
`;

/*================================================*/

export const Ranking = styled.div`
font-family: Open Sans;
font-size: 16px;
font-weight: 700;
line-height: 24.51px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
position: relative;
right: -279px;

`;

