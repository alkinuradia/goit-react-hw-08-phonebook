import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/authOperations';

import { Form, Title, FormLabel, LabelTitle, Input } from "./LoginForm.styled"; 
import Button from "components/Button/Button";

const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = evt => {
		evt.preventDefault();
		const form = evt.currentTarget;
		dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
		);
		form.reset();
	}

	return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Title >Please log in</Title>
      <FormLabel >
        <LabelTitle>E-mail:</LabelTitle>
        <Input  type="email" name="email" />
      </FormLabel>
      <FormLabel>
        <LabelTitle>Password:</LabelTitle>
        <Input  type="password" name="password" />
      </FormLabel>
      <Button title="Log in" type="submit" />
    </Form>
  );
};

export default LoginForm;