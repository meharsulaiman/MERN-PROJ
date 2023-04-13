import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../../components/layouts/Layout';
import '../../styles/AuthStyle.css';

import toast from 'react-hot-toast';

import axios from 'axios';
import { useAuth } from '../../context/Auth';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );

      if (res.data && res.data.success) {
        toast.success(res.data.message);
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || '/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <Layout title={'Register Yourself'}>
      <div className="form-container" style={{ minHeight: '90vh' }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="password"
              required
            />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
