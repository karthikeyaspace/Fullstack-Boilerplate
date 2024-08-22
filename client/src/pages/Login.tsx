import Login from "../components/forms/Login";
import LoginSupabase from "../components/forms/LoginSupabase";

// either one of the following

const LoginPage: React.FC = () => {
  return (
    <div>
      <Login />
      <LoginSupabase />
    </div>
  );
};

export default LoginPage;