import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label, TextInput, Button, Checkbox } from 'flowbite-react';
import { useAuth } from '../context/AuthProvider';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login();
    navigate('/dashboard');
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow dark:bg-gray-900">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to your account</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between gap-36">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
              Lost Password?
            </a>
          </div>
          <div className="w-full">
            <Button type="submit">Log in to your account</Button>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
