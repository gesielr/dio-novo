import React from 'react';
import { Container, Header, SearchBar, FeedContent, Sidebar, FeedCard1, FeedCard2, Feedretangulo1,UserInfo, UserAvatar, FeedArea, 
  Tags, Likes, Highlight, TimeInfo, Title, Description, Ranking, Bar, LevelFilled, FotoName , UserName} from './styles';
import logo from '../../assets/logo-dio.png';
import perfil from '../../assets/perfil.jpeg';
import image from '../../assets/image.png';

function Feed() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Dio" />
        <SearchBar>
          <input type="text" placeholder="Buscar" />
        </SearchBar>
        <nav>
          <a href="/live-code">Live Code</a>
          <a href="/global">Global</a>
        </nav>
        <UserAvatar src={perfil} alt="User Avatar" />
      </Header>
      <FeedContent>
        <FeedArea>
          <h2 className='feed'>Feed</h2>
          <FeedCard1 image={image}></FeedCard1>
          <Feedretangulo1>
             <UserInfo>
              <UserAvatar src={perfil} alt="Avatar" />
              <h2 className='nome'>Carlos Gesiel Rebelo</h2>
             </UserInfo>
              <TimeInfo>Há 8 minutos</TimeInfo>
              <Title>Projeto para curso de HTML e CSS</Title>
              <Description>
               Projeto feito no curso de html e css no bootcamp da dio do Global avanade...
              <Highlight>Ver mais</Highlight>
              </Description>
              <Tags>#HTML #CSS #JavaScript</Tags>
              <Likes>10</Likes>
          </Feedretangulo1>
          <FeedCard2 image ={image}></FeedCard2>
         </FeedArea>
         <Ranking><h3># RANKING 5 TOP DA SEMANA</h3></Ranking>
         <Sidebar>
            <ul>
            <FotoName>
            <UserAvatar src={perfil} alt="Avatar" />
            <UserName>Carlos Gesiel Rebelo</UserName>
            </FotoName>
              <li>
                <Bar>
                  <LevelFilled style={{ width: '70%' }}></LevelFilled>
                </Bar>
              </li>
              <FotoName>
              <UserAvatar src={perfil} alt="Avatar" />
              <UserName>Carlos Gesiel Rebelo</UserName>
              </FotoName>
              <li>
                <Bar>
                  <LevelFilled style={{ width: '50%' }}></LevelFilled>
                </Bar>
              </li>
              <FotoName>
              <UserAvatar src={perfil} alt="Avatar" />
              <UserName>Carlos Gesiel Rebelo</UserName>
              </FotoName>
              <li>
                <Bar>
                  <LevelFilled style={{ width: '90%' }}></LevelFilled>
                </Bar>
              </li>
              <FotoName>
              <UserAvatar src={perfil} alt="Avatar" />
              <UserName>Carlos Gesiel Rebelo</UserName>
              </FotoName>             
               <li>
                <Bar>
                  <LevelFilled style={{ width: '30%' }}></LevelFilled>
                </Bar>
              </li>
              <FotoName>
              <UserAvatar src={perfil} alt="Avatar" />
              <UserName>Carlos Gesiel Rebelo</UserName>
              </FotoName>
              <li>
                <Bar>
                  <LevelFilled style={{ width: '60%' }}></LevelFilled>
                </Bar>
              </li>
            </ul>
          </Sidebar>

      </FeedContent>
    </Container>
  );
}

export default Feed;
