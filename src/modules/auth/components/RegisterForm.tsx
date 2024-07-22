import React, { useState } from 'react';
import { Label, TextInput, Button, Checkbox } from 'flowbite-react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviarlo a una API
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow dark:bg-gray-900">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create your account</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Confirm your password" />
            </div>
            <TextInput
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms">
              I accept the&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                terms and conditions
              </a>
            </Label>
          </div>
          <div className="w-full">
            <Button type="submit">Register</Button>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?&nbsp;
            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Log in
            </a>
          </div>
        </form>
      </div>
    
  );
};

export default RegisterForm;
