import React, { useState } from "react";
import Header from "../components/Header"; 
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


const Signup = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


    return(
        <>
        <Header />
        <Nav />
        <Link to="/login">← Go to Login</Link>

      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
        

        <Footer />
        </>

    )
}

export default Signup;