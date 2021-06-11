import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../../../utils/components/Button';
import useWidth from '../../../../utils/helpers/useWidth';
import { FormWrapper, LabelInput, StyledButton, StyledError, StyledTitle, Container } from './styles';

const ContactForm = () => {
  const { width } = useWidth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <StyledTitle>Entre em contato comigo!</StyledTitle>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <LabelInput htmlFor="name">
          Seu nome
          <input id="name" placeholder="Ex.: Edson Arantes" {...register('name', { required: true })} />
          {errors.name && <StyledError>Nome obrigatório</StyledError>}
        </LabelInput>
        <LabelInput htmlFor="email">
          Seu melhor e-mail
          <input
            id="email"
            type="text"
            placeholder="seu@email.com"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <StyledError>Email obrigatório</StyledError>}
        </LabelInput>
        <StyledButton type="submit" />
        {width < 768 && (
          <Link to="/">
            <Button type="button">Voltar</Button>
          </Link>
        )}
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;
