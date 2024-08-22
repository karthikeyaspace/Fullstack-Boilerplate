import React, { useState } from "react";
import { signIn, signUp, signInWithGoogle } from "../../services/supabase/auth";
import { useAuth } from "../../hooks/useAuth";

const LoginSupabase: React.FC = () => {
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
      const { error } = await signIn(formData.email, formData.password);
      if (error) setError(error.message);
    } else {
      const { error } = await signUp(formData.email, formData.password);
      if (error) setError(error.message);
    }
  };

  const handleGoogleSingIn = async () => {
    const { error } = await signInWithGoogle();
    if (error) setError(error.toString());
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
      <button onClick={handleGoogleSingIn}>sign in with google</button>
    </div>
  );
};

export default LoginSupabase;
