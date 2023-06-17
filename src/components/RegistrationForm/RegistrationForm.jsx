import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations'; 

import { Form, Title, FormLabel, LabelTitle, Input } from"../LoginForm/LoginForm.styled";
import Button from 'components/Button/Button';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
		const form = evt.currentTarget;
		dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
		form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Title>Please register</Title>
      <FormLabel>
        <LabelTitle>Name:</LabelTitle>
        <Input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        <LabelTitle>E-mail:</LabelTitle>
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        <LabelTitle>Password:</LabelTitle>
        <Input type="password" name="password" />
      </FormLabel>
      <Button title="Create account" type="submit" />
    </Form>
  );
};

export default RegistrationForm;