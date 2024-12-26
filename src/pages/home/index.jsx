import React from 'react';
import { Container, Banner, Title, Description, Button, Header } from './styles';
import logo from '../../assets/logo-dio.png';
import banner from '../../assets/banner.png';

function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Dio" />
        <nav>
          <a href="/">Home</a>
          <a href="/login">Entrar</a>
          <a href="/register">Cadastrar</a>
        </nav>
      </Header>
      <Banner>
        <div>
          <Title>Implemente o seu futuro global agora!</Title>
          <Description>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional.
          </Description>
          <Button as="a" href="/register">Começar agora</Button>
        </div>
        <img src={banner} alt="Banner" />
      </Banner>
    </Container>
  );
}

export default Home;
