import React from 'react';
import Layout from './../../components/layouts/Layout';
import { useAuth } from '../../context/Auth';
import UserMenu from '../../components/layouts/UserMenu';

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={'user dashboard'}>
      <div className="container-fluid my-3 py-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Admin Name : {auth?.user?.name}</h3>
              <h3>Admin Email : {auth?.user?.email}</h3>
              <h3>Admin Address : {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
