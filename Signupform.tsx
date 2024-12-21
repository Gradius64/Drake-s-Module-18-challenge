import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../mutations'; // Ensure this path is correct

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      // Optionally handle successful sign-up, e.g., redirect or show a message
      console.log('User signed up:', data.addUser);
    } catch (e) {
      console.error('Error signing up:', e);
    }
  };

  return (


  