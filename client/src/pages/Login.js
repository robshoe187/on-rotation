import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
          });
          const token = mutationResponse.data.login.token;
          Auth.login(token);
        } catch (e) {
          console.log(e);
        }
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
        <form className="loginForm" onSubmit={handleFormSubmit}>
        <Link className="btn btn-light" to="/signup">← Go to Signup</Link>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email address:</label>
          <input
            
            className="form-control"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="pwd" className="form-label">Password:</label>
          <input
            
            className="form-control"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end" className="loginButton">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
        <Footer />
        </>
    )
}

export default Login;