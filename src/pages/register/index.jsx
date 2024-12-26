import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import { Container, Form, Input, Button, Title, SubTitle, BackButton } from "./styles";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação da senha
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        "A senha deve conter pelo menos 6 caracteres, uma letra maiúscula e um caractere especial."
      );
      return;
    }

    console.log("Formulário enviado com sucesso!", formData);
    // Aqui você pode enviar os dados para o backend (API)
  };

  return (
    <Container>
      <Title>Crie sua conta</Title>
      <SubTitle>Complete os campos abaixo para se cadastrar.</SubTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="Nome completo"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <BackButton onClick={() => navigate("/")}>Voltar</BackButton> {/* Botão de voltar */}
    </Container>
  );
};

export default Register;
