import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Content, Form, Header, Input, Button, Footer } from './styles';
import logo from '../../assets/logo-dio.png';
import api from '../../services/api'; // Importa a instância do Axios configurada

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Erros são capturados aqui
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Faz a requisição GET para buscar o usuário no recurso "users"
      const response = await api.get('/users', {
        params: {
          email: data.email,
          password: data.password,
        },
      });
  
      // Verifica se o usuário foi encontrado
      if (response.data.length > 0) {
        const user = response.data[0]; // Pega o primeiro usuário encontrado
        console.log('Usuário autenticado:', user);
        alert('Login realizado com sucesso!');
  
        // Simula um token e salva no localStorage
        localStorage.setItem('token', `fake-token-${user.id}`);
  
        // Redireciona para o tela incial
        window.location.href = '/feed';
      } else {
        alert('E-mail ou senha inválidos. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };
  

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Dio" />
        <nav>
          <a href="/">Home</a>
          <a href="/login">Entrar</a>
          <Button as="a" href="/register">Cadastrar</Button>
        </nav>
      </Header>
      <Content>
        <div>
          <h1>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Faça seu login</h2>
          <p>Faça seu login e make the change...</p>

          {/* Campo de e-mail com validação */}
          <Input
            type="email"
            placeholder="E-mail"
            autoComplete="username"
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Digite um e-mail válido',
              },
            })}
          />
          {/* Renderiza a mensagem de erro do e-mail */}
          {errors.email && <span style={{ color: 'white' }}>{errors.email.message}</span>}

          {/* Campo de senha */}
          <Input
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            {...register('password', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter no mínimo 6 caracteres',
              },
            })}
          />
          {/* Renderiza a mensagem de erro da senha */}
          {errors.password && <span style={{ color: 'white' }}>{errors.password.message}</span>}

          {/* Botão de login */}
          <Button type="submit">Entrar</Button>

          <Footer>
            <a className="link1" href="/forgot-password">
              Esqueci minha senha
            </a>
            <a className="link2" href="/register">
              Criar conta
            </a>
          </Footer>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
