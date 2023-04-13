import React from 'react';

import { useAuth } from '../context/Auth';
import Layout from '../components/layouts/Layout';

const HomePage = () => {
  const [auth] = useAuth();

  return (
    <Layout title={'All Offers - Ecommerce app'}>
      <h1>Home page</h1>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </Layout>
  );
};

export default HomePage;
