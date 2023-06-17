import { Link } from './AuthForm.styled';

export default function AuthForm() {
  return (
    <nav>
      <Link to="/register" >
        Sign up
      </Link>
      <Link to="/login" >
        Log in
      </Link>
    </nav>
  );
}


