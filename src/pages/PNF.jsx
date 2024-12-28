import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const PNF = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link className='bg-blue-900 text-white rounded-md px-4 py-2' to='/landingPage' type="primary">Back Home</Link>}
  />
);
export default PNF;