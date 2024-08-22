import React, { useState } from "react";
import { login, register } from "../../services/api/auth";
import { useAuth } from "../../hooks/useAuth";

const Login: React.FC = () => {
  const { session } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (session) {
      const response = await login(formData.email, formData.password);
      if (response === true) console.log("login success");
      else console.log("login failed");
    } else {
      const response = await register(formData.email, formData.password);
      if (response === true) console.log("resgisterd");
      else console.log("failed to register");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-600">{error}</p>}
        <input
          id="email"
          name="email"
          type="email"
          required
          className=""
          placeholder="Email address*"
          onChange={handleChange}
        />

        <input
          id="password"
          name="password"
          type="password"
          required
          className=""
          placeholder="Password*"
          onChange={handleChange}
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Login;
