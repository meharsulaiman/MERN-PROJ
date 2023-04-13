import React from 'react';
import Layout from '../../components/layouts/Layout';
import UserMenu from '../../components/layouts/UserMenu';

const Orders = () => {
  return (
    <>
      <Layout title={'Your Orders'}>
        <div className="container-fluid py-3 my-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h1>All Orders</h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Orders;
