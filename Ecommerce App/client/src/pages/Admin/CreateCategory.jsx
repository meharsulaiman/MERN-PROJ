import React from 'react';
import Layout from '../../components/layouts/Layout';
import AdminMenu from '../../components/layouts/AdminMenu';

const CreateCategory = () => {
  return (
    <>
      <Layout title="Dashboard - Create Category">
        <div className="container-fluid my-3 py-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h1>create category</h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CreateCategory;
