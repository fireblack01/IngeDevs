import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import React from 'react';

const PrivateComponent = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;
  return isAuthenticated ? <>{children}</> : <></>;

};

export default PrivateComponent;
