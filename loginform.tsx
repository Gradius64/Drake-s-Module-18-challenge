import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../mutations'; // Adjust the import based on your file structure

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: { email, password } });
      // Handle successful login (e.g., save token, redirect user)
      console.log('Login successful:', data);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (