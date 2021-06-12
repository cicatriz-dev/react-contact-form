import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../../../utils/components/Button';
import { Container, StyledTitle, FormWrapper, LabelInput, StyledSubmit } from './styles';
import useWidth from '../../../../utils/helpers/useWidth';

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
          {errors.name && <span>Nome é obrigatório.</span>}
        </LabelInput>
        <LabelInput htmlFor="email">
          Seu melhor e-mail
          <input
            id="email"
            placeholder="seu@email.com"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>E-mail é obrigatório</span>}
        </LabelInput>
        <StyledSubmit type="submit" />

        {width < 768 && (
          <Link to="/">
            <Button>Voltar</Button>
          </Link>
        )}
      </FormWrapper>
    </Container>
  );
};

export default ContactForm;
