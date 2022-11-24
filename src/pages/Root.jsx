import React from 'react';
import Layout from '../components/Layout';
import {Outlet} from "react-router-dom";

const Root = () => {
  return (
    <div className='root'>
      <Layout sidebar>
          <Outlet/>
      </Layout>
    </div>
  )
}

export default Root
