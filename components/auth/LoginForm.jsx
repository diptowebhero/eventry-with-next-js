"use client";
import { doUserLogin } from "@/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const foundUser = await doUserLogin(formData);

      if (foundUser) {
        setAuth(foundUser);
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form className='login-form' onSubmit={handleSubmit}>
        {/* <!-- email --> */}
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' id='email' />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
        </div>

        <button
          type='submit'
          className='btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800'>
          Login
        </button>
        <div className='my-2 text-red-500'>{error}</div>
      </form>
    </>
  );
};

export default LoginForm;
